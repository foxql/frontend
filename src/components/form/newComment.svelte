<div class = "new-comment">
    <textarea placeholder="Your comment here!"></textarea>
    <button on:click="{handleButton}">
        <span class = "fab fa-telegram-plane"></span>
    </button>
</div>


<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function handleButton()
    {
        let content = document.querySelector('textarea').value;
        if(content.length < 2) {
            return false;
        }
        dispatch('newComment',{
            content : content
        });
        document.querySelector('textarea').value = '';
    }
</script>

<style>
    div {
        display: flex;
        margin-top: 8px;
    }

    textarea {
        width: 94%;
        padding: 0.5rem;
        background: rgb(0 0 0 / 20%);
        color: #ccc;
        resize: none;
        height: 36px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    button {
        width: 32px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background: #f5c759;
    }
</style>