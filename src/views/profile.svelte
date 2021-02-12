<script>
    export let client;
    
    import CardButtons from '../components/cardButtons.svelte';
    import Header from '../components/header.svelte';
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
</style>

<Header content = "{enums.PROFILE}"/>



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




