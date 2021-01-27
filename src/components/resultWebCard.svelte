<script>
    export let client;
    export let document;

</script>

<style>
    .url {
        color: #555;
        font-size: 12px;
    }

    .card-slider {
        width: 100%;
        overflow-x: auto;
        position: relative;
        width: 100%;
        height: 75px;
    }

    .slider-container {
        height: 100%;
        width: max-content;
        position: absolute;
    }

    .slider-item {
        background : rgb(234 237 239);
        margin-right:5px;
        float:left;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 10px;
    }

    .slider-item a {
        font-size:13px;
        text-decoration: none;
    }

    .card-slider::-webkit-scrollbar {
        width: 5px;
        height: 10px;
    }
    
    .card-slider::-webkit-scrollbar-thumb {
        background-color: #131517;
        border-radius: 4px;
    }
</style>

<div class = "card pd-1" >
    <div class = "card-title pd-b-05">
        <a href = "{document.document.url}" class = "web-title">{document.document.title}</a>
    </div>
    <div class = "card-body pd-b-05">
        <p>{document.document.description}</p>
        <p class = "url">
            <a href = "{document.document.url}">{document.document.url}</a>
        </p>

        {#if document.subResults.length > 0}


            <div class = "card-slider">
                <div class = "slider-container">

                    {#each document.subResults as item}
                        <div class = "slider-item pd-1">
                            <a href = "{item.document.url}">{item.document.title}</a>
                        </div>
                    {/each}
                </div>
            </div>

        {/if}

    </div>
</div>