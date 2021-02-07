<script>
    export let client;
    export let id;
    import NewDocument from '../components/newEntry.svelte';
    import DocumentButtons from '../components/documentButtons.svelte';
    import NotFoundCard from '../components/notFoundCard.svelte';
    import { NotificationDisplay } from '@beyonk/svelte-notifications';
    import Header from '../components/header.svelte';
    

    let title = '';

    async function loadDocuments(documentRef)
    {
        let documents = await client.findDocument({  
            ref : documentRef,
            collection : 'entrys',
            timeOut : 500,
            match : {
                field : 'entryKey'
            }
        });

        const myDocument = client.database.useCollection('entrys').getDoc(documentRef);

        if(myDocument){
            documents.push(
                myDocument
            );
        }
        

        let documentMap = {};
        /** Consensus! */
        documents.forEach( doc => {

            title = doc.title;

            if(documentMap[doc.documentId] == undefined ) {
                doc.recieveCount = 1;
                documentMap[doc.documentId] = doc;
            }else{
                documentMap[doc.documentId].recieveCount++;
            }
        });


        return Object.values(documentMap);
    }
    let promise = loadDocuments(id);

    $ : {
        promise = loadDocuments(id)
    }

    let n;
</script>

<NotificationDisplay bind:this={n} />

    {#await promise}
        loading...
    {:then documents}

    {#if documents.length > 0}
    <Header content = "{title}"/>
    <div class = "pd-l-1 pd-r-1">
        <div class = "card pd-1 rounded-8 card-bg-primary pd-1 m-t-1">
            {#each documents as doc} 
                    <div class = "card-body entry-sub-content pd-b-05 flex">
                        <DocumentButtons
                            client = {client}
                            doc = {doc}
                            collectionName = 'entrys'
                        />
                        <div class = "content pd-05">
                            {doc.content}
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
