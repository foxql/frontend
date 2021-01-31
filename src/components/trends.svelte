<script>
    export let client;
    import {link} from 'svelte-routing';
    import enums from '../enums/enums.js';

    let trendList = {};

    client.peer.socket.on('newTrendTopic', (document)=>{
        trendList[document.doc.title] = document;
    })

    client.peer.socket.on('dropTrendTopic', (document)=>{
        delete trendList[document.doc.title]
    })

    client.peer.socket.on('getTrends', (list)=>{
        if(list.length <= 0) return;

        list.sort(function(a, b) {
            return parseFloat(b.count) - parseFloat(a.count);
        });

        list.forEach( document => {
            trendList[document.doc.title] = document;
        });
    })

    client.peer.socket.emit('getTrends', true)
    

</script>

<style>
.card {
    margin-bottom: 10px;
    background : rgb(247 249 250);
    border:0px;
    border-radius: 10px;
    margin-top:10px;
}

.card .card-title {
    font-size:16px;
    border-bottom: 1px solid #eee;
}
</style>

<div class = "card">
    <div class = "card-title pd-l-1 pd-t-05 pd-b-05">
        {enums.TRENDS}
    </div>
    <div class = "card-body">
        <ul>
            {#if Object.keys(trendList).length <= 0} 
                    <li class = "pd-1">
                        {enums.TREND_EMPTY}
                    </li>
            {:else}

            {#each Object.values(trendList) as item}
                    
                <li class = "pd-1">
                   <a href = "entry/{item.doc.documentId}" use:link replace>{item.doc.title}</a>
                </li>

            {/each}

            {/if}
        </ul>
    </div>
</div>