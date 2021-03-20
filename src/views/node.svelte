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

        {#await promise}
            loading broo
            {:then documents}

            {#each documents as doc}
                <EntryBox 
                    client = {client} 
                    data = {{
                        doc : doc
                    }}
                    hiding = {true}
                />
            {/each}

        {/await}
    </div>
</div>



<script>
    export let client;
    import { fade } from 'svelte/transition';
    import EntryBox from '../components/box/entryBox.svelte';
    import lang from '../utils/lang'

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

    async function loadItems()
    {
        return Object.values(client.database.useCollection('entrys').documents);
    }

    let promise = loadItems();
</script>

<style>
    .box-title {
        font-size : 1rem;
    }

   .stat {
       display: flex;
       padding : 0.5rem 1rem;
       background: #1516196b;
       margin-bottom : 0.4rem;
       align-items: center;
   }

   .stat span {
       margin-left :auto;
       font-weight: 600;
       padding : 0.3rem 0.6rem;
       color : #e6bf60;
   }
</style>