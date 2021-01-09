<script>
    export let client;
    export let title;
    export let id;

    import NewDocument from '../components/newDocument.svelte';

    async function loadDocuments()
    {
        let documents = await client.findDocument({  
            ref : id,
            collection : 'entrys',
            timeOut : 500
        });

        return documents;
    }

    const promise = loadDocuments()
</script>

<style>
    .entry-result {
        background: #f1ebeb5e !important;
    }

    .entry-result .card-body {
        font-size: 0.83rem;
        font-family: 'Open Sans';
    }
</style>


<div class = "card">
    <h2>{title}</h2>
</div>


{#await promise}
    loading...
{:then documents}

    {#each documents as doc} 
        <div class = "card entry-result">
            <div class = "card-body">
                {doc.content}
            </div>
        </div>
    {/each}

{/await}

<NewDocument client = {client} />