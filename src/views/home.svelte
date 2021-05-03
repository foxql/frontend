
    {#await promise}
        <Loading/>
    {:then data}
        {#if data.length <= 0}
                <InfoBox {...lang.INFO_CARD.NOT_FOUND}/>
            {:else}

                {#each data as document}

                    <EntryBox data = {document} client = {client}/>

                {/each}

        {/if}

        
    {/await}
                                                                                                                                    

<script>
    export let client;
    import EntryBox from '../components/box/entryBox.svelte';
    import InfoBox from '../components/box/infoBox.svelte';
    import Loading from '../components/box/loading.svelte';
    import lang from '../utils/lang';

    const index = client.database.useCollection('entrys');
    const indexRef = index.ref;

    let myDocuments = Object.values(index.documents);

    shuffle(myDocuments)

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    async function query() {

        const queryObject = {
            limit : 1,
            collection : 'entrys'
        };

        let event = await client.sendEvent(queryObject, {
            timeOut : 150, 
            peerListener : 'onRandom',
            documentPool : myDocuments.slice(0, 3)
        });

        shuffle(event.results)
        return event.results;
    }

    const promise = query();

    

</script>