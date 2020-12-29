<script>
    export let client;
    export let query;
    import { SearchIcon } from 'svelte-feather-icons'

    import EntryCardResult from '../components/entryResultsCard.svelte'

    async function searchNetwork()
    {
        const results = await client.search({
            query : query,
            timeOut : 300
        });

        return results;
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
            <EntryCardResult document = {item.document}/>
        {/if}
    {/each}
{/await}


