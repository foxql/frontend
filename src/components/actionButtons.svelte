<script>
    export let client;
    export let doc;
    export let collection;
    export let profileActions;

    const ref = doc.documentId;

    let findDoc = client.database.useCollection(collection).getDoc(ref) ? true : false;
    if(findDoc){
        doc.recieveCount++;
    }

    async function handleStart()
    {
        if(findDoc){
            client.database.useCollection(collection).deleteDoc(ref);
            doc.recieveCount--;
            findDoc = false;
        }else {
            client.database.useCollection(collection).addDoc(doc);
            findDoc = true;
            doc.recieveCount++;
        }
    }

    async function handleRemove()
    {
        const drop = client.database.useCollection('entrys').deleteDoc(ref);
        if(drop) {
            document.querySelector('.doc-'+ref).style.display = 'none';
        }
    }
</script>

<style>
    .action-buttons {
        box-sizing: border-box;
        display: flex;
        margin-top:8px;
    }

    .action-buttons button {
        font-size:13px;
        box-sizing: border-box;
        border-radius: 8px;
        border: 0px;
        color: #fff;
        outline: none;
        cursor:pointer;
        margin-right:8px;
    }

    .active {
        background: #7897b7;
    }

    .active:hover {
        background: #4a4c4e;
    }

    .notActive {
        background: #4a4c4e;
    }

    .notActive:hover {
        background: #7897b7;
    }
</style>

<div class = "action-buttons">
    {#if profileActions == undefined}

        <button class = "pd-05 {findDoc ? 'active' : 'notActive'}" on:click="{handleStart}">
                <span class = "fa fa-star"></span> {doc.recieveCount}
        </button>

        {:else}

        <button class = "pd-05 active" on:click="{handleRemove}">
            <span class = "fa fa-trash"></span>
        </button>
    {/if}
  
</div>