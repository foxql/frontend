<script>
    export let client;
    import {link} from 'svelte-routing';

    import enums from '../enums/enums.js';

    const listenerName = 'actionList';

    let actions = [];

    client.peer.socket.emit(listenerName, true)
    client.peer.socket.on(listenerName, (list)=>{
        list = list.filter(item => {
            if(item.type === 'new-document'){
                const filter = client.censored(item.document);
                item.document = filter.document;
            }
            if(item.type === 'new-search'){
                const filter = client.censored(item);
                item = filter.document;
            }
            return item;
        });
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
        {enums.ACTIONS}
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