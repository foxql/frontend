{#if target}

    
    <ProfileBox 
        peerInformation = {target.information}
        peerId = {peerId}
    />

    {#each target.offerList as documentId}
    
        <OfferDocument 
            {...documents[documentId]}
            on:message = {listenNewDoc}
        />

    {/each}

{/if}


<script>
    export let peerId;

    import { store, storedData } from '../stores/offeredDocuments.js';
    import OfferDocument from '../components/offers/document.svelte';
    import ProfileBox from '../components/node/profileBox.svelte';

    const foxqlClient = window.client;

    const documents = {...storedData.documents};
    const target = storedData.peerList[peerId] || false;
    
    function listenNewDoc(e)
    {
        const doc = e.detail.doc;
        foxqlClient.database.useCollection('entrys').addDoc(doc);
    }

    if(target) {
        target.offerList.forEach(documentId => {
            delete storedData.documents[documentId];
        });

        delete storedData.peerList[peerId];

        store.set(JSON.stringify(storedData));
    }


</script>