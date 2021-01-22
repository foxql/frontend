<script>
    export let client;

    import Header from '../components/header.svelte'
    import ActionButtons from '../components/actionButtons.svelte';

    let entrys = Object.values(client.database.useCollection('entrys').documents);
</script>

<style>
    .entry-content {
        font-size : 0.9rem;
    }
</style>


<Header text = 'Profil' />

{#each entrys as entry}

    <div class = "card pd-1 doc-{entry.documentId}">
        <div class = "card-title pd-b-05">
            {entry.title}
        </div>
        <div class = "card-body entry-content">
            {entry.content}
            <ActionButtons 
                client = {client} 
                doc = {entry} 
                collection = 'entrys'
                profileActions = {true}
            />
        </div>
    </div>

{/each}




