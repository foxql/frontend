<div class = "box search-box">
    <SearchBox />
</div>

{#if typeof queryString == 'string'}

        {#await searchPromise}
            <div class = "box box-primary search-header">
                <b>
                    {queryString} 
                </b>
                
                <div class = "right-side">
                    {lang.APP.SEARCH_PROMISE}
                </div>
            </div>

            <Loading/>

            {:then results} 
            <div class = "box box-primary search-header">
                <b>
                    {queryString} 
                </b>

                <div class = "right-side">
                    {results.length} {lang.APP.RESULTS}
                </div>
            </div>

            {#if results.length > 0}
                    {#each results as item}
                        <EntryBox  data = {{
                            doc : item.doc.document
                        }} client = {client} />
                    {/each}
                {:else}
                    
                <InfoBox {...lang.INFO_CARD.NOT_FOUND}/>

            {/if}

{/await}

{/if}



<script>
    export let queryString = false;
    export let client;

    import EntryBox from '../components/box/entryBox.svelte';
    import Loading from '../components/box/loading.svelte';
    import InfoBox from '../components/box/infoBox.svelte';
    import lang from '../utils/lang';
    import SearchBox from '../components/form/searchBox.svelte'

    const collection = client.database.useCollection('entrys');


    async function searchNetwork(qString) {

        if(typeof qString !== 'string'){
            return []
        }

        const queryObject = {
            query : qString,
            collection : 'entrys'
        };

        const searchOnMyIndexs = collection.search(qString);

        const query = await client.sendEvent(queryObject, {
            timeOut : 400, 
            peerListener : 'onSearch',
            documentPool : searchOnMyIndexs
        });

        if(query.count <= 0){
            return [];
        }

        let results = query.results;

        results.sort((a,b)=>{
            return new Date(b.doc.score) - new Date(a.doc.score);
        });

        return results;
    }

    let searchPromise = searchNetwork(queryString);

    $ : {
        searchPromise = searchNetwork(queryString);
    }

</script>


<style>
    .search-header {
        display:flex;
    }
    .right-side {
        margin-left:auto;
    }

    .box b {
        margin-right : 1rem;
    }

    .search-box {
        display:none;
    }

    @media screen and (max-width: 992px) {
        .search-box {
            display:block;
        }
    }
</style>