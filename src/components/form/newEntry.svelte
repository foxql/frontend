<div class = "container" in:fade>
    <div class = "new-entry-box">
        <input 
            type = "text"
            placeholder = "{lang.NEW_ENTRY.TITLE}" 
            class = "title-input {title != undefined ? 'hidden' : ''}"
            value = "{title != undefined ? title : ''}"    
        >
        <textarea placeholder = "{lang.NEW_ENTRY.PLACEHOLDER}" style="height:{height}px;"></textarea>
    </div>

    <button class = "share-button" on:click="{handleButton}">
        <span class = "fas fa-paw"></span>
        {lang.NEW_ENTRY.BUTTON}
    </button>
</div>

<script>
    export let title;
    export let height = "200";
    export let client;
    export let redidect = false;
    import { fade } from 'svelte/transition';
    import addDoc from '../../utils/documents/add';
    import lang from '../../utils/lang'

    import { navigate } from 'svelte-routing'

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const collection = client.database.useCollection('entrys');

    const offerCollection = client.database.useCollection('entry_offers');
    

    function handleButton ()
    {
        let doc = {
            title : document.querySelector('.title-input').value.trim(),
            content : document.querySelector('textarea').value.trim(),
            createDate : new Date(),
            parentDocumentId : null
        };

        const refId = addDoc(collection, doc)
        if(refId){
            document.querySelector('textarea').value = '';
            dispatch('newDocument', {
                documentId : refId
            });
            const findDoc = collection.getDoc(refId);
            if(redidect && findDoc) {
                navigate(`entry/${findDoc.documentId}/${findDoc.entryKey}`);
            }

            offerCollection.addDoc({
                entryId : refId,
                recieverCount : 0,
                destroyRecieveCount : 25
            })

            client.peer.broadcast({
                listener : 'new-document-listener',
                data : {
                    doc : findDoc
                }
            });

        }
    }

</script>


<style>

    .container {
        background: rgb(0 0 0 / 35%);
        padding: 1rem;
        border-radius: 4px;
    }

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
        .container {
            margin-bottom: 1rem;
        }
        input, textarea {
            border-radius: 0px;
            margin-bottom: 0px;
        }
        textarea {
            border-top: 1.5px solid rgb(0 0 0 / 20%);
        }
        .share-button {
            font-size : 0.8rem;
            border-radius: 0px;
        }

        textarea {
            padding : 0.4rem 0.8rem;
        }
    }

    .hidden {
        display: none;
    }
</style>