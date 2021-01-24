<script>
    export let client;
    export let title;

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

    async function handleKeyDown(e)
    {
        if(e.key !== 'Enter' && e.key != 'Backspace') return;

        this.style.height = this.scrollHeight + 'px';
    }

</script>

<style>

    .new-document {
       border : 1px solid #eee;
       box-sizing : border-box;
       max-height: 250px;
       overflow-y: auto;
    }

    .new-document input, .new-document textarea {
        width : 100%;
        border-radius : 8px;
        border : 0px;
        box-sizing : border-box;
        margin-bottom : 8px;
    }
    .new-document input {
        border : 1px solid #ccc;
        outline : none;
        transition : background ease 0.2s;
    }
    .new-document input:focus,  .new-document textarea:focus{
        background : #eee;
        color : #555;
    }

    .new-document textarea {
        min-height : 80px;
        outline : none;
        border : 1px solid #ccc;
        resize: horizontal;
        overflow: hidden;
    }

    .btn-list {
        display: flex;
    }


    .entry-submit {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        margin-left: auto;
    }





    
</style>

<div class = "new-document pd-1">
    {#if typeof title === 'string'}
        <input type = "text" value = "{title}" class = "entry-title pd-05"  minlength="10" maxlength="80" hidden/>
        {:else}
        <input type = "text" placeholder = "Başlık" class = "entry-title pd-05"  minlength="10" maxlength="80"/>
    {/if}
    <textarea 
        class = "entry-content pd-05"
        placeholder = "Neler oluyor?" 
        minlength="30" 
        maxlength="500"
        on:keydown="{handleKeyDown}"
    ></textarea>
    <div class = "btn-list">
        <button class = "btn btn-primary pd-05">
            <span class = "fas fa-image"></span>
        </button>

        <button class = "btn btn-primary pd-05">
            <span class = "fas fa-link"></span>
        </button>


        <button class = "entry-submit btn" on:click="{handleClick}"> 
            <span class = "fas fa-square"></span> Paylaş
        </button>
    </div>

</div>