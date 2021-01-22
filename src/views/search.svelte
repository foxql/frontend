<script>
    export let client;
    export let query;
    
    import { beforeUpdate } from 'svelte';

    import EntryCardResult from '../components/entryResultsCard.svelte'
    import WebPageCardResult from '../components/resultWebCard.svelte';

    import Booster from '../helpers/searchBooster.js';

    async function searchNetwork()
    {
        let resultMap = {};
        let results = await client.search({
            query : query,
            timeOut : 0
        });

        client.peer.socket.emit('search', query)


        if(results.count > 0 ) {
            const booster = new Booster(query, results);
            booster.setRule({
                webPage : {
                    mainPage : 10
                }
            })
            results = booster.boost();  

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

    beforeUpdate(()=>{
        searchPromise = searchNetwork()
   });

</script>

<div class = "card pd-1">
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
            <WebPageCardResult document = {item} client = {client}/>
        {/if}
    {/each}
{/await}


