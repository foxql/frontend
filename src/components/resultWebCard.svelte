<script>
    export let client;
    export let document;

    async function handleSave()
    {
       client.database.useCollection('webPage').addDoc(document.document);
       client.peer.socket.emit('newDoc', document.document);
    }
</script>

<style>
    .webpage-result {
        background: #f1ebeb5e;
    }
    .webpage-result .card-header{
        font-family: 'Poppins';
        text-align: left;
        line-height: 1;
        text-transform: none;
    }

    .webpage-result .card-body {
        font-size: 0.83rem;
        font-family: 'Open Sans';
    }

    .card-footer {
        display:flex;
    }
    .card-footer button {
        padding: 0.35rem 0.5rem;
        border: 0px;
        background: #555;
        color: #eee;
        margin-right: 8px;
        font-size: 12px;
    }
</style>

<div class = "card webpage-result" >
    <div class = "card-header">
        {document.document.title}
    </div>
    <div class = "card-body">
        <p>{document.document.description}</p>
        <p class = "url">
            <a href = "{document.document.url}">{document.document.url}</a>
        </p>

        {#if document.subResults.length > 0}


            <div class = "card-slider">
                <div class = "card-container">

                    {#each document.subResults as item}
                        <div class = "slider-item">
                            <a href = "{item.document.url}">{item.document.title}</a>
                            <p>{item.document.description}</p>
                        </div>
                    {/each}
                </div>
            </div>

        {/if}

        <div class = "card-footer">
            {#if !client.database.useCollection('webPage').getDoc(document.document.documentId)}
                <button on:click = "{handleSave}">Sahiplen</button>
            {/if}

            <button>Paylaş</button>
        </div>
    </div>
</div>