<script>
    export let client;

    import Entry from '../components/entry/entry.svelte'
    import EntryHeader from '../components/entry/header.svelte'
    import Post from '../components/entry/post.svelte'
    import findCommentsInResults from '../utils/loadEntrys/findComments'

    import InfoBox from '../components/box/infoBox.svelte';
    import lang from '../utils/lang'

    const collection = client.database.useCollection('entrys');
    client.peer.socket.emit('actionList', true)

    let documentList = Object.values(collection.documents).sort((a, b)=>{
        return new Date(b.createDate) - new Date(a.createDate);
    }).slice(0,15)

    documentList = documentList.map(item => {
        item.comments = [];
        return {
            doc : item
        }
    })

    documentList.sort((a, b)=>{
        return new Date(a.doc.createDate) - new Date(b.doc.createDate);
    })

    const finalResults = Object.values(
        findCommentsInResults(documentList, collection)
    ).sort((a, b) => {
        return new Date(b.createDate) - new Date(a.createDate);
    });
</script>


{#if finalResults.length > 0}

    {#each finalResults as item}
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