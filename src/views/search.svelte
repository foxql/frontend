<script>
    export let client;
    export let query;

    import EntryCardResult from '../components/entryResultsCard.svelte'
    import WebPageCardResult from '../components/resultWebCard.svelte';
    import NewEntry from '../components/newEntry.svelte';
    import enums from '../enums/enums.js';
    import NotFoundCard from '../components/notFoundCard.svelte';
    import Header from '../components/header.svelte';

    import Booster from '../helpers/searchBooster.js';

    async function searchNetwork(queryString)
    {
        let resultMap = {};
        let results = await client.search({
            query : queryString,
            timeOut : 350
        });


        if(results.count > 0 ) {
            const booster = new Booster(queryString, results);
            booster.setRule({
                webPage : {
                    mainPage : 10
                }
            })
            results = booster.boost();  

            results.results.forEach(item => {
                const subDocumentId = item.document.documentSubId;
                item.document = client.censored(item.document)
                if(resultMap[subDocumentId] === undefined){
                    item.subResults = [];
                    resultMap[subDocumentId] = item;
                }else{
                    resultMap[subDocumentId].subResults.push(item);
                }
            });
            client.peer.socket.emit('search', queryString)
        }


        return {
            results : resultMap,
            count : results.count
        };

    }

    let searchPromise = searchNetwork(query);

    $: {
        searchPromise = searchNetwork(query)
    }

</script>

    {#await searchPromise}
        <Header content = "{enums.VIEWS.SEARCH.PROMISE}"/>
    {:then data}
        <Header content = "{query} {enums.VIEWS.SEARCH.THEN}"/>
    {/await}

<div class = "pd-l-1 pd-r-1">
    {#await searchPromise}
        ...
    {:then data}
        {#if Object.values(data.results).length > 0}
                {#each Object.values(data.results) as item}
                    {#if item._collection == 'entrys'}
                        <EntryCardResult document = {item}/>
                    {/if}

                    {#if item._collection == 'webPage'}
                        <WebPageCardResult document = {item}/>
                    {/if}
                {/each}
            {:else}
            <NotFoundCard/>
            <NewEntry client = {client} title = {query}/>

        {/if}
    {/await}
</div>


