<script>
    export let client;
    export let id;
    import NewDocument from '../components/newEntry.svelte';
    import DocumentButtons from '../components/documentButtons.svelte';
    import NotFoundCard from '../components/notFoundCard.svelte';
    import { NotificationDisplay } from '@beyonk/svelte-notifications';
    import Header from '../components/header.svelte';
    import Meta from '../components/meta.svelte'

    let title = '';

    let metadata = {
        title : '',
        description : ''
    };
    let entrys = [];
    let searching = true;
    async function loadDocuments(documentRef)
    {
        searching = true;
        entrys = [];
        const queryObject = {
            ref : documentRef,
            collection : 'entrys',
            match : {
                field : 'entryKey'
            }
        };

        const query = await client.sendEvent(queryObject, {
            timeOut : 500,
            peerListener : 'onDocumentByRef'
        });
        if(query.count <= 0){
            searching = false;
            return [];
        }
        let results = query.results;

        results.sort((a,b)=>{
            return new Date(a.doc.createDate) - new Date(b.doc.createDate);
        });

        const firstEntry = client.censored(results[0].doc).document;
        title = firstEntry.title;
        metadata.title = title;
        metadata.description = firstEntry.content;
        results = results.filter(item => {
            const filter = client.censored(item.doc);
            item.doc = filter.document
            return item;
        });
        entrys = results;
        searching = false;
    }

    $ : {
        loadDocuments(id)
    } 

    let n;
</script>

<Meta {metadata}/>
<NotificationDisplay bind:this={n} />
{#if entrys.length <= 0}
    {#if searching}
        <Header content = "Loading from peers..."/>
        {:else}
        <div class = "pd-l-1 pd-r-1">
            <NotFoundCard/>
            <NewDocument client = {client}/>
        </div>
    {/if}

    {:else}
        <Header content = "{title}"/>
        <div class = "pd-l-1 pd-r-1">
            <div class = "card pd-1 rounded-8 card-bg-primary pd-1 m-t-1">
                {#each entrys as item} 
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
{/if}