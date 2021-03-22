<div class = "btn-container doc-{documentId}">
    <button 
        class = "share-btn {check ? 'active' : 'not-active'}" 
        on:click="{handleClone}"
    >
    {#if hide}
        <span class = "fa fa-trash"></span>
        {:else}
        <span class = "fa fa-heart"></span>
    {/if}
    </button>
</div>

<script>
    export let doc;
    export let client;
    export let hide;
    import { notifier } from '@beyonk/svelte-notifications'

    let documentId = doc.documentId;

    const collection =  client.database.useCollection('entrys');
    let check = collection.getDoc(documentId) ? true : false

    function handleClone()
    {
        if(check) {
            check = collection.deleteDoc(documentId) ? false : true;
            if(hide) {
                document.querySelector('.doc-'+documentId).parentNode.style.display = 'none'
            }
            notifier.danger('İçerik cihazınızdan kaldırıldı', 1500) 
            
        }else {
            check = collection.addDoc(doc);
            notifier.success('İçerik cihazınıza klonlandı', 1500) 
        }
    }
</script>



<style>
    .share-btn {
        margin-top: 1rem;
    }

    .active {
        color : #ea2f2f;
    }

    .not-active {
        color: #675555;
    }
</style>