
<div class = "section-item2" onsubmit = "return false;">
    <form>
        <input type = "text" value = "{lang.LANDING.DOCUMENT_TITLE}" disabled>
        <textarea 
            placeholder = "{lang.LANDING.TEXTAREA_PLACEHOLDER}" 
            minlength="20" 
            maxlength="500"
        ></textarea>
        <button on:click="{handleButton}"><span class = "fa fa-paper-plane"></span> {lang.LANDING.FORM_BUTTON}</button>
    </form>
</div>

<script>
    export let client;
    import { notifier } from '@beyonk/svelte-notifications'
    import lang from '../../utils/lang'

    const collection = client.database.useCollection('entrys');

    function handleButton()
    {
        const content = document.querySelector('textarea').value;

        if(content.length < 20) {
            notifier.danger(lang.NOTIFICATION.MIN_CONTENT_LENGTH, 1000) 
            return false;
        }

        const push = collection.addDoc({
            title : lang.LANDING.DOCUMENT_TITLE,
            content : content,
            createDate : new Date()
        });

        if(push) {
            notifier.success(lang.NOTIFICATION.DOCUMENT_ADDED, 1000) 
            notifier.success(lang.NOTIFICATION.REDIRECT, 1200) 
            setTimeout(()=>{
                window.location.href = window.location.href;
            }, 1100);
        }else{
            notifier.danger(lang.NOTIFICATION.DOCUMENT_NOT_ADDED, 1000) 
        }
    }

</script>

<style>
    .section-item2 {
        margin-left: auto;
        width: 35%;
    }

    .section-item2 input , .section-item2 textarea{
        width : 100%;
        padding : 0.5rem 1rem;
        background : rgb(0 0 0 / 30%);   
        color : #eee;
        font-size:1.2rem;
    }

    .section-item2 input {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .section-item2 form {
        height:100%;
    }

    .section-item2 textarea {
        height : 75%;
        border-top : 1px solid #555;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        resize: none;
        
    }

    .section-item2 button {
       width: 100%;
       padding:0.5rem 1rem;
       border-radius: 8px;
       cursor: pointer;
       background : rgb(0 0 0 / 30%);   
       color : var(--yellow-1);
    }


    @media screen and (max-width: 992px) {
       .section-item2 {
            width: 100% !important;
            margin-top: 3rem;
       }

       .section-item2 input , .section-item2 textarea{
            width : 100%;
            padding : 0.5rem 1rem;
            background : rgb(0 0 0 / 30%);   
            color : #eee;
            font-size: 0.9rem;
        }

        .section-item2 textarea {
            height : 125px;
        }
    }
</style>
