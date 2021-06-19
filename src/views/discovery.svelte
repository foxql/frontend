<div class = "box search-box">
    <SearchBox />
</div>

    {#await promise}
        <Loading/>
    {:then data}
        {#if data.length <= 0}
                <InfoBox {...lang.INFO_CARD.NOT_FOUND}/>
            {:else}

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
                                senders = {Object.values(item.senderMap)}
                                collection = {collection}
                            />
                        </div>
                   </Entry>

                {/each}

        {/if}

        
    {/await}
                                                                                                                                    

<script>
    export let client;

    import SearchBox from '../components/form/searchBox.svelte';

    import Entry from '../components/entry/entry.svelte'
    import EntryHeader from '../components/entry/header.svelte'
    import Post from '../components/entry/post.svelte'

    import InfoBox from '../components/box/infoBox.svelte';
    import Loading from '../components/box/loading.svelte';
    import lang from '../utils/lang';

    const collection = client.database.useCollection('entrys');

    const limit = 20;

    async function query() {

        const connectedPeerCount = client.peer.stableConnectionCount();
        const queryUsedLimit = limit / connectedPeerCount;


        const queryObject = {
            limit : queryUsedLimit < 1 ? 1 : queryUsedLimit,
            collection : 'entrys'
        };

        let event = await client.sendEvent(queryObject, {
            timeOut : 550, 
            peerListener : 'onRandom',
            documentPool : []
        });

        return event.results;
    }

    const promise = query();

    

</script>


<style>
    .search-box {
        display: none;
    }

    @media screen and (max-width: 992px) {
        .search-box {
            display: block;
        }
    }
</style>