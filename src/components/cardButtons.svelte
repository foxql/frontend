<script>
    export let client;
    export let doc;



    const ref = doc.documentId;

    function handleRemove()
    {
        const drop = client.database.useCollection('entrys').deleteDoc(ref);
        if(drop) {
            document.querySelector('.doc-'+ref).style.display = 'none';
        }
    }



</script>

<div class = "card-footer-button-list pd-t-05">
    <button class = "reset-btn pd-05">
        <span class = "fa fa-trash-alt" on:click="{handleRemove}"></span>
    </button>
</div>