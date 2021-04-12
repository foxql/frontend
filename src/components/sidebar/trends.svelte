<div class = "box">
    <div class = "box-title">
        {lang.APP.TRENDS}

        <button on:click="{handleRefresh}">
            <span class = "fa fa-sync-alt"></span>
        </button>
    </div>
    <div class = "box-content">
        {#if list.length > 0} 
            {#each list as item}
                <a href = "entry/{item.doc.documentId}/{item.doc.entryKey}" use:link>{item.doc.title} <b>({item.count})</b></a>
            {/each}
        {/if}
    </div>
</div>


<script>
    export let client;
    import { link } from "svelte-routing";
    import lang from '../../utils/lang';
    import {notifier} from '@beyonk/svelte-notifications'

    const collection = client.database.useCollection('entrys');
    let currentTime = new Date().getTime();

    function findTrendDocs()
    {
        let hashMap = {};

        Object.values(collection.documents).forEach((doc)=>{
            const diff = ( currentTime - new Date(doc.createDate).getTime() ) / 1000;
            if(diff <= 24000) {
                const entryKey = doc.entryKey;
                if(hashMap[entryKey] === undefined) {
                    hashMap[entryKey] = {
                        count : 0,
                        doc : doc
                    };
                }
                hashMap[entryKey].count += 1;
            }
        })

        return Object.values(hashMap).sort((a,b)=>{
            return b.count - a.count;
        }).slice(0, 10)
    }

    let list = findTrendDocs();

    function handleRefresh()
    {
        list = findTrendDocs();
        notifier.success(lang.NOTIFICATION.TRENDS_REFRESH, 1200)
    }

</script>


<style>
    a {
        display: block;
        color : #eee;
        background : rgb(0 0 0 / 35%);
        border-radius:8px;
        margin-bottom:0.5rem;
        padding : 0.4rem 1rem;
        font-size : 0.8rem;
    }

    .box-title {
        display:flex;
        padding-right: 0rem !important;
        align-items: center;
    }

    .box-title button {
        margin-left : auto;
        border-radius : 100px;
        cursor:pointer;
        color : #e0c49b;;
        background:transparent;
    }
</style>