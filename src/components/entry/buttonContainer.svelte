<div class = "button-container">

    <button 
        class = "save-btn {savedStatus ? 'active' : 'passive'}"
        on:click="{handleSave}"
    >   
        <span class = "fas fa-paw"></span>

        Rehunt
    </button>

    <button 
        class = "comment-btn"
        on:click="{handleShowComments}"
    >
        <span class = "fa fa-comments"></span>
        {commentsCount}
    </button>

    {#if senders.length > 0}

        <button
            class = "show-senders"
        >
            @{senders[0].information.alias}
        </button>

    {/if}

</div>

<script>
    export let title;
    export let content;
    export let documentId;
    export let createDate;
    export let collection;
    export let commentsCount;
    export let commentShowStatus;
    export let senders = [];

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let savedStatus = collection.documents[documentId] ? true : false;

    function handleSave()
    {
        if(savedStatus) {
            savedStatus =  collection.deleteDoc(documentId) ? false : true;
        }else{
            savedStatus = collection.addDoc({
                title : title,
                content : content,
                createDate : createDate,
                parentDocumentId : null
            }) ? true : false;
        }
    }

    function handleShowComments()
    {
        if(commentShowStatus){
            commentShowStatus = false
        }else {
            commentShowStatus = true;
        }

        dispatch('commentStatus', {
            _status : commentShowStatus
        });
    }

</script>

<style>

    button {
        font-size: 1rem;
        background: transparent;
        cursor: pointer;
        margin-right: 0.4rem;
    }

    .active:hover{
        filter : brightness(0.7);
    }

    .passive:hover {
        filter : brightness(1);
    }

    .button-container {
        display: flex;
        padding: 0.5rem 0rem 0rem 0rem;
    }

    .save-btn {
        color: #ff3636;
    }

    .passive {
        filter : brightness(0.7);
    }

    .comment-btn {
        color : #e6bf60;
    }

    .show-senders {
        border-radius: 150px;
        margin-left: auto;
        font-size: 0.6rem;
        color: #ccc;
    }
</style>