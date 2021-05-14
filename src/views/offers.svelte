{#await promise}

    <Loading />

    {:then data}

    {#if data.length <= 0}
        Hiç teklif yok :)
    {/if}

    {#if data.length > 0}

        <InfoBox
            {...lang.INFO_CARD.OFFERS}
        />

        {#each data as item}

        <Entry>
            <div slot = "header">
                 <EntryHeader 
                     title = {item.doc.title}
                     navigate = {{
                         documentId : item.doc.documentId,
                         entryKey : item.doc.entryKey
                     }}
                 />
            </div>
            <div slot = "posts">
                 <Post 
                     {...item.doc}
                     collection = {collection}
                 />
             </div>
        </Entry>

        {/each}

    {/if}


{/await}



<script>
    export let client;
    import lang from '../utils/lang';

    import InfoBox from '../components/box/infoBox.svelte';
    import Loading from '../components/box/loading.svelte';

    import Entry from '../components/entry/entry.svelte'
    import EntryHeader from '../components/entry/header.svelte'
    import Post from '../components/entry/post.svelte'

    const collection = client.database.useCollection('entrys')

    async function query() {

        const queryObject = {
            sync : true
        };

        const consensus = await client.sendEvent(queryObject, {
            timeOut : 100, // destroy 1.2s listener
            peerListener : 'onSync'
        });
        return consensus.results;
    }

    const promise = query();

</script>