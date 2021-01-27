<script>
    export let client;
    import {link} from 'svelte-routing';

    let trendList = {};

    client.peer.socket.on('newTrendTopic', (document)=>{
        trendList[document.doc.title] = document;
        console.log('Trendlere yeni giriş')
    })

    client.peer.socket.on('dropTrendTopic', (document)=>{
        delete trendList[document.doc.title]
        $:trendList = trendList;
    })

    client.peer.socket.on('getTrends', (list)=>{
        if(list.length <= 0) return;

        list.forEach( doc => {
            trendList[doc.title] = doc;
        });

        $:trendList = trendList;
    })

    client.peer.socket.emit('getTrends', true)

</script>


<div class = "card">
    <div class = "card-title pd-l-1 pd-t-05 pd-b-05">
        Gündem
    </div>
    <div class = "card-body">
        <ul>
            {#if Object.keys(trendList).length <= 0} 
                    <li class = "pd-1">
                        Gündem boş :(
                    </li>
            {:else}

            {#each Object.values(trendList) as item}

                <li class = "pd-1">
                   <a href = "entry/{item.doc.documentId}/{item.doc.title}" use:link>{item.doc.title}</a>
                </li>

            {/each}

            {/if}
        </ul>
    </div>
</div>