<script>
    export let client;
    import {CloudIcon} from 'svelte-feather-icons';


    async function handleClick()
    {
        const add = client.database.useCollection('entrys').addDoc({
            title : document.querySelector('.entry-title').value,
            content : document.querySelector('.entry-content').value
        });

        if(add) {
            alert('Başarıyla ekledim!')
        }else{
            alert('Olmadı be agam!')
        }
    }
</script>

<style>

    .new-document .entry-title{
        padding: 0.4rem;
        font-size: 12px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
        margin-bottom: 8px;
    }       

    .new-document .entry-content {
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
        min-height: 125px;
        border-radius: 4px;
        outline: none;
        border-color: #ccc;
        color: #555;
    }

    .entry-submit {
        padding : 0.5rem 1rem;
        border:1px solid #ccc;
        background : #ddd;
        outline : none;
        border-radius: 4px;
        cursor:pointer;
    }

    .entry-submit:hover {
        filter : invert(1);
    }
</style>

<div class = "card new-document">

    <div class = "card-body">
        <input type = "text" placeholder = "Başlık" class = "entry-title"  minlength="10" maxlength="80"/>
        <textarea class = "entry-content" placeholder = "İçerik" minlength="30" maxlength="500"></textarea>
        <button class = "entry-submit" on:click="{handleClick}"> 
            <CloudIcon size = "16"/> Sahiplen
        </button>
    </div>

</div>