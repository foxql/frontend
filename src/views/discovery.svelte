<script>
    export let client;
    import NewDocument from '../components/newDocument.svelte';
    import NotFound from '../components/notFoundCard.svelte';
    import Searchbox from '../components/searchBox.svelte';

    async function getDocuments() {
        return new Promise((resolve)=>{
            client.randomDocument({
                limit : 2,
                collection : 'entrys',
                timeOut : 200
            },(documents)=>{
                console.log(documents);
                resolve(documents)
            });
        });
    }

    const eventPromise = getDocuments();
</script>

<style>
    .entry-card .card-header{
        font-size : 15px;
    }

    .entry-card .card-body{
        font-size : 13px;
    }
</style>

<Searchbox/>

{#await eventPromise}
    loading...
{:then documents}
    {#if documents.length <= 0}
        <NewDocument client = {client} />
        {:else}
        
        {#each documents as document}
            <div class = "card entry-card">
                <div class = "card-header">
                    {document.title}
                </div>
                <div class = "card-body">
                    <p>
                        {document.content}
                    </p>
                </div>
                <div class = "card-footer">
                    <button>
                        Sahiplen
                    </button>
                </div>
            </div>
        {/each}

    {/if}
{/await}
