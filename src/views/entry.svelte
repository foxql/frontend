
{#await promise}
    <Loading/>
{:then data}

    {#if posts.length <= 0 }
        
        <InfoBox {...lang.INFO_CARD.NOT_FOUND}/>

        {:else}

            <Entry>
                <div slot = "header">
                    <Header {...data}/>
                </div>
        
                <div slot = "posts">
                    {#each posts as post}
                        <Post {...post} collection = {collection}/>
                    {/each}
                </div>  
        
            </Entry>
            

            <NewEntry 
                client = {client}
                title = {data.orginalTitle}
                height = {125}
                on:newDocument = {listenNewPost}
            />
    {/if}
{/await}


<script>
    export let client;
    export let id;
    export let entryKey;

    import lang from '../utils/lang'

    import Entry from '../components/entry/entry.svelte'
    import Header from '../components/entry/header.svelte'
    import Post from '../components/entry/post.svelte'

    import Loading from '../components/box/loading.svelte';
    import loadEntrys from '../utils/loadEntrys';
    import NewEntry from '../components/form/newEntry.svelte';
    import InfoBox from '../components/box/infoBox.svelte'

    const collection = client.database.useCollection('entrys');

    let posts = [];

    function listenNewPost(event)
    {
        posts = [...posts, collection.getDoc(event.detail.documentId)]
    }

    async function init()
    {
        const results = await loadEntrys({
            client : client,
            documentId : id,
            entryKey : entryKey
        })


        posts = results.query || []
        return results.metadata;
    }

    let promise = async()=>{
        return {
            metadata : {
                title : '',
                orginalTitle : ''
            }
        };
    }

    $ : {
        promise = init();
    }

</script>