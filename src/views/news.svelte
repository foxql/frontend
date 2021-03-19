<script>
    export let client;
    import EntryBox from '../components/box/entryBox.svelte';
    import InfoBox from '../components/box/infoBox.svelte';
    import lang from '../utils/lang'

    const listenerName = 'actionList';

    client.peer.socket.emit(listenerName, true)

    let actions = [];


    client.peer.socket.on(listenerName, (list)=>{
        list = list.filter(item => {
            return item;
        });
        actions = list;
    })

</script>


{#if actions.length > 0}

    {#each actions as item}
        {#if item.type === 'new-document'}
            <EntryBox  data = {{
                doc : item.document
            }} client = {client} />
        {/if}

    {/each}

    {:else}

    <InfoBox  {...lang.INFO_CARD.NEWS_NOT_FOUND}/>


{/if}