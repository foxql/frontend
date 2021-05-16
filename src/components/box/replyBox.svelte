
{#if show}
    <div class = "box" in:fade>
        <textarea placeholder = "Reply entry"></textarea>
        <button on:click="{handleButton}">
            <span class = "fa fa-paper-plane"></span>
        </button>
    </div>
{/if}

<script>
    export let targetDoc;
    export let show;
    export let client;
    import { fade } from 'svelte/transition';
    import addDoc from '../../utils/documents/add'

    const collection = client.database.useCollection('entrys');


    function handleButton() {
        
        let doc = {...targetDoc};
        doc.content = document.querySelector('textarea').value.trim();
        doc.parentDocumentId = targetDoc.documentId;
        doc.createDate = new Date()

        const add = addDoc(collection, doc)

        if(add){
            document.querySelector('textarea').value = '';
        }

    }
</script>


<style>
    .box {
        padding : 0rem !important;
        display: flex;
        background: rgb(0 0 0 / 30%);
        margin-top : 1rem;
    }

    .box textarea {
        width: 90%;
        padding: 0.3rem 0rem 0rem 0.5rem;
        border-radius: 4px;
        resize: none;
        color:#eee;
        background: transparent;
    }

    button {
        padding: 0rem 1rem;
        font-size: 1rem;
        color: #54575d;
        background: #d6b462;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-left: auto;
    }

    @media screen and (max-width: 992px) { 

        button {
            font-size:0.9rem;
        }

    }

</style>