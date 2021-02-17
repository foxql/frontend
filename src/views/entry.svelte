<script>
    export let client;
    export let id;
    import NewDocument from '../components/newEntry.svelte';
    import DocumentButtons from '../components/documentButtons.svelte';
    import NotFoundCard from '../components/notFoundCard.svelte';
    import { NotificationDisplay } from '@beyonk/svelte-notifications';
    import Header from '../components/header.svelte';
    import Meta from '../components/meta.svelte'

    const collection = client.database.useCollection('entrys');

    let title = '';

    let metadata = {
        title : '',
        description : ''
    };

    /**let documents = await client.findDocument({  
            ref : documentRef,
            collection : 'entrys',
            timeOut : 500,
            match : {
                field : 'entryKey'
            }
        });

        const myDocument = collection.getDoc(documentRef);

        if(myDocument){
            documents.push(
                myDocument
            );
        }
        
        

        let documentMap = {};

        documents.forEach( doc => {
            doc = client.censored(doc);
            title = doc.title;
            metadata.title = title;
            metadata.description = doc.content;
            const documentId = doc.documentId;

            if(documentMap[documentId] == undefined ) {
                doc.recieveCount = 0;
                documentMap[documentId] = doc;
            }
           
            documentMap[documentId].recieveCount++;
            

            if(collection.getDoc(documentRef)) {
                documentMap[documentId].recieveCount++;
            }
        });

        let oneDimensionalResults = Object.values(documentMap);
        oneDimensionalResults.sort((a,b)=>{
            return b.recieveCount - a.recieveCount;
        });
        return oneDimensionalResults;*/


    async function loadDocuments(documentRef)
    {
        const queryObject = {
            ref : documentRef,
            collection : 'entrys',
            match : {
                field : 'entryKey'
            }
        };

        const query = await client.sendEvent(queryObject, {
            timeOut : 1400, // destroy 1.2s listener
            peerListener : 'onDocumentByRef'
        });

        if(query.count <= 0){
            return [];
        }
        let results = query.results;

        results.sort((a,b)=>{
            return new Date(a.doc.createDate) - new Date(b.doc.createDate);
        });

        const firstEntry = results[0].doc;

        title = firstEntry.title;
        metadata.title = title;
        metadata.description = firstEntry.content;
        

        return results.map(item => {
            item.doc = client.censored(item.doc)
            return item;
        });
    }

    let promise = loadDocuments(id);

    $ : {
        promise = loadDocuments(id)
    }

    let n;
</script>

<Meta {metadata}/>

<NotificationDisplay bind:this={n} />

    {#await promise}
    <Header content = "Loading from peers"/>
    {:then documents}

    {#if documents.length > 0}
    <Header content = "{title}"/>
    <div class = "pd-l-1 pd-r-1">
        <div class = "card pd-1 rounded-8 card-bg-primary pd-1 m-t-1">
            {#each documents as item} 
                    <div class = "card-body entry-sub-content pd-b-05 flex">
                        <DocumentButtons
                            client = {client}
                            data = {item}
                            collectionName = 'entrys'
                        />
                        <div class = "content pd-05">
                            {item.doc.content}
                        </div>
                    </div>
            {/each}
        </div>
        <NewDocument client = {client} title = {title}/>
    </div>
        {:else}
        <div class = "pd-l-1 pd-r-1">
            <NotFoundCard/>
            <NewDocument client = {client}/>
        </div>
    {/if}
    
    {/await}
