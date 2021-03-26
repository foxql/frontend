<div class = "box" in:fade>
    <div class = "box-title">
        {lang.APP.NODE_STATS}
    </div>
    <div class = "box-content">
        <div class = "stat">
            {lang.APP.DOCUMENT_COUNT}
            <span>{client.database.useCollection('entrys').documentLength}</span>
        </div>
        <div class = "stat">
            {lang.APP.DATA_SIZE}
            <span>{dbSize}</span>
        </div>
        <div class = "stat">
            {lang.APP.COLLECTIONS}
            <span>1</span>
        </div>
        <div class = "stat">
            {lang.APP.CONNECTED_NODES}
            <span>{client.peer.stableConnectionCount()}</span>
        </div>
    </div>
</div>


<div class = "box" in:fade>
    <div class = "box-title">
        {lang.APP.DOCUMENTS}
    </div>
    <div class = "box-content">
        {#each showingDocuments as doc}
            <EntryBox 
                client = {client} 
                data = {{
                    doc : doc
                }}
                hiding = {true}
            />
        {/each}
    </div>
</div>

{#if showMore }
    <button class = "show-more" on:click="{handleShowMore}" in:fade>
        Devamını Göster
    </button>
{/if}



<script>
    export let client;
    import { fade } from 'svelte/transition';
    import EntryBox from '../components/box/entryBox.svelte';
    import lang from '../utils/lang';

    let limit = 5;

    function formatBytes(str, decimals = 2) {

        var b = str.match(/[^\x00-\xff]/g);
        const bytes =  (str.length + (!b ? 0: b.length)); 

        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    } 


    let dbSize = formatBytes(JSON.stringify(client.database))

    let allDocuments = Object.values(client.database.useCollection('entrys').documents);
    let showingDocuments = allDocuments.splice(0, limit);

    let showMore = allDocuments.length > limit ? true : false;

    function handleShowMore()
    {
        showingDocuments = showingDocuments.concat(allDocuments.splice(0, limit))

        if(allDocuments.length <= 0) {
            showMore = false
        }
    }

</script>

<style>
    .box-title {
        font-size : 1rem;
    }

   .stat {
       display: flex;
       padding : 0.5rem 1rem;
       background: #1619226b;
       margin-bottom : 0.4rem;
       align-items: center;
   }

   .stat span {
       margin-left :auto;
       font-weight: 600;
       padding : 0.3rem 0.6rem;
       color : #e6bf60;
   }

   .show-more {
        padding: 0.4rem 1rem;
        width: 100%;
        background: #3f86c3;
        color: #eee;
        border-radius: 4px;
   }
</style>