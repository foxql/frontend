<script>
    export let client;
    export let data;
    export let collectionName;
    export let hideHeart;

    let doc = data.doc;

    import enums from '../enums/enums.js';
    import { notifier } from '@beyonk/svelte-notifications';
    import ShareButton from '../components/shareButton.svelte';

    let recieveCount = data.count;

    const collection = client.database.useCollection(collectionName);
    const documentRef = doc[collection.ref];

    let documentIsSaved = false;

    function documentControl()
    {
        if(collection.getDoc(documentRef)){
            documentIsSaved = true;
        }else{
            documentIsSaved = false;
        }
    }

    function handleUp()
    {
        if(!documentIsSaved){
            collection.addDoc(doc);
            recieveCount++;
            documentIsSaved = true;
            notifier.success(enums.NOTIFICATION.UPVOTE, 1200)
        }
    }


    function handleDown()
    {
        if(documentIsSaved){
            collection.deleteDoc(documentRef);
            recieveCount--;
            documentIsSaved = false;
            notifier.danger(enums.NOTIFICATION.DOWNVOTE, 1200)
        }
    }

    documentControl();

</script>

<style>

    .action-buttons {
        display: relative;
        font-size:1rem;
    }

    .action-buttons button {
        font-size: 1.1em;
    }

    .active {
        color : #d06f6f;
    }




</style>

<div class = "action-buttons flex fdirection-column pd-05 f-all-center">
    <button class  = "fa fa-chevron-up reset-btn {documentIsSaved ? 'active' : ''}" on:click="{handleUp}"></button>
    <span>{recieveCount}</span>
    <button class = "fa fa-chevron-down reset-btn {documentIsSaved === false ? 'active' : ''}" on:click="{handleDown}"></button>
    
    {#if hideHeart == undefined}
    <hr>
        <ShareButton {doc}/>
    {/if}
    
</div>