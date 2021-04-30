<script>
    export let client;

    import Entry from '../components/entry/entry.svelte'
    import EntryHeader from '../components/entry/header.svelte'
    import Post from '../components/entry/post.svelte'

    import InfoBox from '../components/box/infoBox.svelte';
    import lang from '../utils/lang'

    const collection = client.database.useCollection('entrys');
    client.peer.socket.emit('actionList', true)

    let actions = Object.values(collection.documents).sort((a, b)=>{
        return new Date(b.createDate) - new Date(a.createDate);
    }).slice(0,10)

    actions = actions.map(item => {
        item.comments = [];
        return item;
    })

</script>


{#if actions.length > 0}

    {#each actions as item}
        <Entry>
            <div slot = "header">
                <EntryHeader 
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
                    collection = {collection}
                />
            </div>
        </Entry>

    {/each}

    {:else}

    <InfoBox  {...lang.INFO_CARD.NEWS_NOT_FOUND}/>


{/if}