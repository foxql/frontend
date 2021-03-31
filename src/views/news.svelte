<script>
    export let client;
    import EntryBox from '../components/box/entryBox.svelte';
    import InfoBox from '../components/box/infoBox.svelte';
    import lang from '../utils/lang'
    import { notifier } from '@beyonk/svelte-notifications'

    const listenerName = 'actionList';

    client.peer.socket.emit(listenerName, true)

    let actions = [];

    const collection = client.database.useCollection('entrys');

    client.peer.socket.on(listenerName, (list)=>{
        let dedectedNewDocument = false;
        list.forEach(item => {
            if(item.type == 'new-document') {
                const doc = item.document;
                if(collection.documents[doc.documentId] === undefined) {
                    collection.addDoc(doc)
                    dedectedNewDocument = true;
                }
            }
        });


        if(dedectedNewDocument) {
            notifier.success(lang.APP.CACHED_NEW_ENTRYS, 1200)
        }

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