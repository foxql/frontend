<script>
    export let client;
    
    import CardButtons from '../components/cardButtons.svelte';

    let entrys = Object.values(client.database.useCollection('entrys').documents);
</script>

<style>
    .entry-content {
        font-size : 0.9rem;
    }
</style>

{#each entrys as entry}

    <div class = "card pd-1 doc-{entry.documentId} card-bg-primary m-t-1 rounded-8">
        <div class = "card-title pd-b-05">
            {entry.title}
        </div>
        <div class = "card-body entry-content">
            {entry.content}

            <CardButtons client = {client} doc = {entry}/>
        </div>
    </div>

{/each}




