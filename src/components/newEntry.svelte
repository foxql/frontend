<script>
    export let client;
    export let title;

    import enums from '../enums/enums.js';
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';

    async function handleClick()
    {
        const body = {
            title : document.querySelector('.entry-title').value,
            content : document.querySelector('.entry-content').value,
            createDate : new Date()
        };
        const add = client.database.useCollection('entrys').addDoc(body);
        client.publishDocument(body, 'entrys');

        if(add) {
            client.peer.socket.emit('newDoc', body);
            document.querySelector('.entry-content').value = '';
            document.querySelector('.entry-title').value = '';
            notifier.success('Your think is published', 1500)
        }else{
            notifier.danger('Oups!', 1500)
        }
    }


    function handleChangeTitle()
    {
        const length = this.value.trim().length;
        console.log(length)
        if(length>=4 && length<=80){
            this.style.borderColor = "#b7d8b7";
        }else{
            this.style.borderColor = "rgb(202 149 149)";
        }
    }

    function handleChangeContent()
    {
        const length = this.value.trim().length;
        console.log(length)
        if(length>=20 && length<=500){
            this.style.borderColor = "#b7d8b7";
        }else{
            this.style.borderColor = "rgb(202 149 149)";
        }
    }

    let n;
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
        border-right: 10px solid transparent;
    }

    .new-document textarea {
        height:125px;
        resize: horizontal;
        overflow-y: auto;
        resize: none;
        border-right: 10px solid transparent;
    }

    .entry-submit {
        padding: 0.5rem 1rem;
        width:100%;
        margin-top: -10px;
    }

    .new-document input:focus, .new-document textarea:focus{
        background: rgb(234 237 239);
    }
</style>
<NotificationDisplay bind:this={n} />
<div class = "new-document rounded-8 card-bg-primary m-t-05">
    {#if typeof title === 'string'}
        <input type = "text" value = "{title}" class = "entry-title pd-1 card-bg-primary"  minlength="10" maxlength="80" hidden/>
        {:else}
        <input type = "text" placeholder = "{enums.NEW_ENTRY_TITLE}" class = "entry-title pd-1 card-bg-primary"  minlength="10" on:keyup="{handleChangeTitle}" maxlength="80"/>
    {/if}
    <textarea 
        class = "entry-content pd-1 card-bg-primary"
        placeholder = "{enums.NEW_ENTRY_BODY}" 
        minlength="30" 
        maxlength="500"
        on:keyup="{handleChangeContent}"
    ></textarea>
    <button class = "entry-submit btn" on:click="{handleClick}"> 
        <span class = "fas fa-comment"></span> {enums.NEW_ENTRY_SUBMIT}
    </button>
</div>