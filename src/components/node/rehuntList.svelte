<div class = "box">
    <div class = "box-title">
        Hunts
    </div>
    <div class = "box-content">

        {#each showedDocuments as item}
            <Entry>
                <div slot = "header">
                    <Header 
                        title = {item.title}
                        navigate = {{
                            documentId : item.documentId,
                            entryKey : item.entryKey
                        }}
                    />
                </div>
                <div slot = "posts">
                    <Post 
                        {...item}
                        comments = {[]}
                        collection = {collection}
                    />
                </div>
            </Entry>
        {/each}

        <button 
            on:click="{showMore}"
        >
            {lang.APP.SHOW_MORE}
        </button>
        
    </div>
</div>



<script>
    export let client;
    import Entry from '../entry/entry.svelte';
    import Post from '../entry/post.svelte';
    import Header from '../entry/header.svelte';
    import lang from '../../utils/lang'

    const collection = client.database.useCollection('entrys');

    const hunts = Object.values(collection.documents);

    let currentIndex = 0;
    let perPage = 3;
    let limit = perPage;

    let showedDocuments = [];

    showMore()


    function showMore()
    {
        console.log(currentIndex, limit)
        showedDocuments = hunts.slice(currentIndex, limit);
        limit += perPage;
    }




</script>


<style>
    button {
        width: 100%;
        border-radius: 8px;
        background: #15161d;;
        padding: 0.4rem;
        color: #ccc;
        box-shadow: 2px 2px 3px 0px #000000ba;
    }
</style>