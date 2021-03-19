<div in:fade>
    <div class = "new-entry-box">
        <input 
            type = "text"
            placeholder = "{lang.NEW_ENTRY.TITLE}" 
            class = "title-input {title != undefined ? 'hidden' : ''}"
            value = "{title != undefined ? title : ''}"    
        >
        <textarea placeholder = "{lang.NEW_ENTRY.PLACEHOLDER}" style="height:{height == undefined ? '200' : height}px;"></textarea>
    </div>

    <button class = "share-button" on:click="{handleButton}">
        <span class = "fa fa-paper-plane"></span>
        {lang.NEW_ENTRY.BUTTON}
    </button>
</div>

<script>
    export let title;
    export let height;
    export let client;
    import { fade } from 'svelte/transition';
    import { notifier } from '@beyonk/svelte-notifications'
    import lang from '../../utils/lang'

    const collection = client.database.useCollection('entrys');

    function handleButton ()
    {
        const title = document.querySelector('.title-input').value.trim();
        const content = document.querySelector('textarea').value.trim();

        if(title.length < 4) {
            notifier.danger(lang.APP.TITLE_MIN_LENGTH, 1400)
            return false;
        }

        if(content.length < 20) {
            notifier.danger(lang.APP.CONTENT_MIN_LENGTH, 1400)
            return false;
        }

        const add = collection.addDoc({
            title : title,
            content : content,
            createDate : new Date()
        })


        if(add){
            notifier.success('İçerik paylaşıldı', 1200)
            document.querySelector('.title-input').value = '';
            document.querySelector('textarea').value = '';
        }else{
            notifier.danger('Paylaşılamadı')
        }


    }

</script>


<style>

    .new-entry-box {
        position: relative;
    }
    textarea, input {
        width : 100%;
        background: rgb(0 0 0 / 30%);
        padding : 0.5rem 1rem;
        color : #ccc;
        margin-bottom: 8px;
        border-radius: 8px;
    }

    input {
        font-size : 1.2rem;
    }

    textarea {
        resize: none;
    }

    .share-button {
        padding: 0.5rem 2rem;
        border-radius: 8px;
        width: 100%;
        cursor: pointer;
        background: #e6bf60;
        font-weight: 600;
    }

    @media screen and (max-width: 992px) {
        .share-button {
            font-size : 0.8rem;
        }

        textarea {
            padding : 0.4rem 0.8rem;
        }
    }

    .hidden {
        display: none;
    }
</style>