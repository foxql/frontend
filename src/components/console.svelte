<script>
    export let client;
    import {link} from 'svelte-routing';


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

<div class = "card card-bg-primary m-t-1 rounded-8">
    <div class = "card-title pd-l-1 pd-t-05 pd-b-05">
        Actions
    </div>
    <div class = "card-body">
        <ul>
            {#each actions as action}
                <li class = "pd-1">
                    {#if action.type == 'new-connection'}
                        Connected <small>(#{action.socketId})</small>
                    {/if}

                    {#if action.type == 'new-document'}
                        New Entry <a href = "/entry/{action.document.documentId}" use:link>{action.document.title}</a>
                    {/if}

                    {#if action.type == 'new-search'}
                        New Search <a href = "search/{action.query}" use:link>{action.query}</a>
                    {/if}
                    
                </li>

            {/each}
        </ul>
    </div>
</div>