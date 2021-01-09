<script>
    export let client;
    export let query;
    import { SearchIcon } from 'svelte-feather-icons'

    import EntryCardResult from '../components/entryResultsCard.svelte'
    import WebPageCardResult from '../components/resultWebCard.svelte';

    async function searchNetwork()
    {
        let resultMap = {};
        const results = await client.search({
            query : query,
            timeOut : 0
        });

        if(results.count > 0 ) {

            results.results.forEach(item => {
                const subDocumentId = item.document.documentSubId;

                if(resultMap[subDocumentId] === undefined){
                    item.subResults = [];
                    resultMap[subDocumentId] = item;
                }else{
                    resultMap[subDocumentId].subResults.push(item);
                }
            });
        }


        return {
            results : resultMap,
            count : results.count
        };
    }

    let searchPromise = searchNetwork();

    async function handleSearch()
    {
        query = document.querySelector('.search-query').value;
        searchPromise = searchNetwork();
    }
    


</script>

<div class = "card search-box">
    <input type = "text" placeholder = "Özgür, anonim ve sansürsüz internet!" class = "search-query"/>
    <button on:click="{handleSearch}"><SearchIcon size="16" /></button>
</div>



<div class = "card">
    {#await searchPromise}
        <b>{query}</b> sorgulanıyor.. 
    {:then data}
        <b>{query}</b> sonuçlandı <span style = "float:right;">{data.count}</span>
    {/await}
</div>

{#await searchPromise}
    ...
{:then data}
    {#each Object.values(data.results) as item}
        {#if item._collection == 'entrys'}
            <EntryCardResult document = {item}/>
        {/if}

        {#if item._collection == 'webPage'}
            <WebPageCardResult document = {item}/>
        {/if}
    {/each}
{/await}


