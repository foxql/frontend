<script>
    export let client;
    import {link} from 'svelte-routing';
    import enums from '../enums/actionEnums.js';

    const listenerName = 'actionList';

    let actions = [];

    client.peer.socket.emit(listenerName, true)
    client.peer.socket.on(listenerName, (list)=>{
        actions = list
    })

    $:actions = actions

    

</script>

<style>
    ul li a small {
        float:right;
    }
</style>

<div class = "card">
    <div class = "card-title pd-l-1 pd-t-05 pd-b-05">
        Hareketler
    </div>
    <div class = "card-body">
        <ul>
            {#each actions as action}
                <li class = "pd-1">
                    {#if action.type == 'new-connection'}
                        {enums[action.type]} <small>(#{action.socketId})</small>
                    {/if}

                    {#if action.type == 'new-document'}
                        <a href = "/entry/{action.document.documentId}/{action.document.title}" use:link>{action.document.title}</a>
                    {/if}

                    {#if action.type == 'new-search'}
                        <a href = "search/{action.query}" use:link>{action.query}</a>
                    {/if}
                    
                </li>

            {/each}
        </ul>
    </div>
</div>