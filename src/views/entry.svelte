{#await promise}
    <Loading/>
{:then data}
    <Entry>
        <div slot = "header">
            <Header {...data.metadata}/>
        </div>

        <div slot = "posts">
            {#each data.query as post}
                <Post {...post} collection = {collection}/>
            {/each}
        </div>  

    </Entry>
{/await}


<script>
    export let client;
    export let id;
    export let entryKey;

    import Entry from '../components/entry/entry.svelte'
    import Header from '../components/entry/header.svelte'
    import Post from '../components/entry/post.svelte'

    import Loading from '../components/box/loading.svelte';
    import loadEntrys from '../utils/loadEntrys';

    const collection = client.database.useCollection('entrys');

    let promise = async()=>{
        return {
            metadata : {
                title : '',
                orginalTitle : ''
            },
            query : {
                count : 0
            }
        };
    }

    $ : {
        promise = loadEntrys({
            client : client,
            documentId : id,
            entryKey : entryKey
        })
    }

</script>