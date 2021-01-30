<script>
    export let client;
    export let title;

    import enums from '../enums/enums.js';

    async function handleClick()
    {
        const body = {
            title : document.querySelector('.entry-title').value,
            content : document.querySelector('.entry-content').value
        };
        const add = client.database.useCollection('entrys').addDoc(body);
        client.publishDocument(body, 'entrys');

        if(add) {
            client.peer.socket.emit('newDoc', body);
            document.querySelector('.entry-content').value = '';
            document.querySelector('.entry-title').value = '';
            alert('Başarıyla ekledim!')
        }else{
            alert('Olmadı be agam!')
        }
    }

</script>

<style>
    .new-document {
       overflow-y: auto;
       position: relative;
    }

    .new-document input, .new-document textarea {
        border:0px;
        width:100%;
        border:0px;
        outline : none;
    }
    .new-document input {
        border-bottom: 1px solid #eee;
    }

    .new-document textarea {
        height:125px;
        resize: horizontal;
        overflow-y: auto;
        resize: none;
    }

    .entry-submit {
        padding: 0.5rem 1rem;
        width:100%;
    }

    .new-document input:focus, .new-document textarea:focus{
        background: rgb(234 237 239);
    }
</style>

<div class = "new-document rounded-8 card-bg-primary m-t-05">
    {#if typeof title === 'string'}
        <input type = "text" value = "{title}" class = "entry-title pd-1 card-bg-primary"  minlength="10" maxlength="80" hidden/>
        {:else}
        <input type = "text" placeholder = "{enums.NEW_ENTRY_TITLE}" class = "entry-title pd-1 card-bg-primary"  minlength="10" maxlength="80"/>
    {/if}
    <textarea 
        class = "entry-content pd-1 card-bg-primary"
        placeholder = "{enums.NEW_ENTRY_BODY}" 
        minlength="30" 
        maxlength="500"
    ></textarea>
    <button class = "entry-submit btn" on:click="{handleClick}"> 
        <span class = "fas fa-comment"></span> {enums.NEW_ENTRY_SUBMIT}
    </button>
</div>