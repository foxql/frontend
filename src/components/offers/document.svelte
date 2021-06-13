<div class = "card" bind:this="{nodeRef}" in:fade>

    <div class = "title">
        {title}
    </div>

    <div class = "content">
        {content}
    </div>
    <div class = "divider"></div>

    <div class = "footer">
        <button 
            on:click="{handleClone}"
        >
            <span class = "fas fa-hand-holding-heart"></span>

            Sahiplen
        </button>

        <span class = "date">
            {new Date(createDate).toDateString()}
        </span>
    </div>  

</div>

<script>
    export let title;
    export let content;
    export let createDate;
    export let parentDocumentId;
    export let entryKey;

    let nodeRef;
    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    const body = {
        title : title,
        content : content,
        createDate : createDate,
        parentDocumentId : parentDocumentId,
        entryKey : entryKey
    };


    function handleClone()
    {
        dispatch('message', {
            doc : body
        });

        nodeRef.style.display = 'none'
    }


</script>

<style>
    .card {
        background: rgb(0, 0, 0, 0.30);
        color: #eee;
        border-radius: 8px;
        margin-bottom: 1rem;
    }

    .title, .content, .footer {
        padding: 1rem;
    }

    .title {
        font-size: 1.1rem;
        font-weight: 600;
        padding-bottom: 0rem;
    }

    .content {
        font-size: 0.9rem;
        color: #ccc;
    }

    .divider {
        background: #24292e;
        height: 2px;
    }

    .footer {
        display: flex;
        align-items: center;
    }

    .footer button {
        color: #c73a3a;
        background: rgb(0 0 0 / 30%);
        box-shadow: 0px 0px 1px #b3b3b3;
        padding:0.4rem 1rem;
        border-radius: 4px;
        transition: all ease 0.6s;
    }

    .footer button:hover {
        color: #dad7d7;
        background: rgb(142 22 22);
        box-shadow: 0px 0px 1px #131212;
        transition: all ease 0.6s;
    }

    .footer .date{
        margin-left: auto;
        font-size: 0.8rem;
    }

</style>
