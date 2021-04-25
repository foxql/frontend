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

    {#if replyBtn}
        <button class = "reply" on:click="{handleReplyButton}">
            <span class = "fa fa-comment-dots"></span> {commentCounts}
        </button>

        <ReplyBox show = {replyBoxShowingStatus} client = {client} targetDoc = {doc}/>
    {/if}
   
</div>

<script>
    export let doc;
    export let client;
    export let hide;
    export let replyBtn;
    export let commentStatus;

    let replyBoxShowingStatus = false;
    let commentCounts = doc.comments.length || 0;

    import { notifier } from '@beyonk/svelte-notifications'
    import ReplyBox from './replyBox.svelte';

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


    function handleReplyButton()
    {
        if(replyBoxShowingStatus){
            replyBoxShowingStatus = false;
            commentStatus(false);
        }else{
            commentStatus(true);
            replyBoxShowingStatus = true;
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

    .reply {
        color: #d6b462;
    }


    @media screen and (max-width: 992px) { 

        button {
            font-size: 1rem;
        }

    }
    
</style>