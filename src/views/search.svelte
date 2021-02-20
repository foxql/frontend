<script>
    export let client;
    export let query;

    import EntryCardResult from '../components/entryResultsCard.svelte'
    import NewEntry from '../components/newEntry.svelte';
    import enums from '../enums/enums.js';
    import NotFoundCard from '../components/notFoundCard.svelte';
    import Header from '../components/header.svelte';
    import SearchBox from '../components/searchBox.svelte';

    async function searchNetwork(queryString)
    {
        const queryObject = {
            query : queryString,
            collection : 'entrys'
        };

        const query = await client.sendEvent(queryObject, {
            timeOut : 1200, // destroy 1.2s listener
            peerListener : 'onSearch'
        });

        if(query.count <= 0){
            return [];
        }
        let results = query.results;

        results.sort((a,b)=>{
            return new Date(b.doc.score) - new Date(a.doc.score);
        });

        return results.filter(item => {
            const filter = client.censored(item.doc.document);
            if(filter.censored){
                return false;
            }
            item.doc.document = filter.document
            return item;
        });

    }

    let searchPromise = searchNetwork(query);

    $ : {
        searchPromise = searchNetwork(query);
    }

</script>

    {#await searchPromise}
        <Header content = "{enums.VIEWS.SEARCH.PROMISE}"/>
    {:then data}
        <Header content = "{query} {enums.VIEWS.SEARCH.THEN}"/>
    {/await}

<div class = "pd-l-1 pd-r-1">
    <SearchBox/>
    {#await searchPromise}
        loading...
    {:then results}
        {#if results.length > 0}
                {#each results as item}
                    <EntryCardResult data = {item}/>
                {/each}
            {:else}
            <NotFoundCard/>
        {/if}
        <NewEntry client = {client} title = {query}/>
    {/await}
</div>


