<script>
    export let client;
    import EntryBox from '../components/box/entryBox.svelte';
    import InfoBox from '../components/box/infoBox.svelte';
    import lang from '../utils/lang'

    const collection = client.database.useCollection('entrys');
    client.peer.socket.emit('actionList', true)

    let actions = Object.values(collection.documents).sort((a, b)=>{
        return new Date(b.createDate) - new Date(a.createDate);
    }).slice(0,10)

</script>


{#if actions.length > 0}

    {#each actions as item}
        <EntryBox  data = {{
            doc : item
        }} client = {client} />

    {/each}

    {:else}

    <InfoBox  {...lang.INFO_CARD.NEWS_NOT_FOUND}/>


{/if}