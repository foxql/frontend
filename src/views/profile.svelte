<script>
    export let client;
    
    import CardButtons from '../components/cardButtons.svelte';
    import enums from '../enums/enums.js';
    import Meta from '../components/meta.svelte';

    let entrys = Object.values(client.database.useCollection('entrys').documents);

    let metadata = {
        title : enums.PROFILE
    };
</script>

<Meta {metadata} />

<style>
    .entry-content {
        font-size : 0.9rem;
    }
    .page-header {
        font-weight: 600;
        font-size:1.1rem;
    }
</style>


<div class = "pd-r-1 page-header-container">
    <div class = "card sidebar-bg-primary pd-1 page-header">
        {enums.PROFILE}
    </div>
</div>




<div class = "pd-l-1 pd-r-1">
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
</div>




