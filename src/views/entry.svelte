{#await promise}
    <Loading/>
{:then data}
    {#if data.query.count <= 0}

           <InfoBox {...lang.INFO_CARD.NOT_FOUND}/>
        {:else}
        
            <div class = "box">
                <div class = "box-title">
                    {data.metadata.title}
                </div>

            {#each data.query as doc}

                    <div class = "box-content">
                        {@html contentParser(doc)}

                        {#if doc.comments.length > 0 && showComments}
                            {#each doc.comments as comment}
                                <div class = "comment-container">
                                    {@html contentParser(comment)}

                                    <BtnContainer doc = {comment} client = {client} replyBtn = {false} commentStatus = {handleCommentStatus}/>
                                </div>
                            {/each}
                        {/if}

                        <BtnContainer doc = {doc} client = {client} replyBtn = {true} commentStatus = {handleCommentStatus}/>
                    </div>
            {/each}

        </div>

    {/if}
    
    <div class = "box box-primary">
        {#if data.metadata.orginalTitle == ''}
            <NewEntryForm height = '100' client = {client}/>
            {:else}
            <NewEntryForm height = '100' title = {data.metadata.orginalTitle} client = {client}/>
        {/if}
    </div>
{/await}


<script>
    export let client;
    export let id;
    export let entryKey;

    let showComments = false


    let title = '';
    let showingTitle = '';

    import Loading from '../components/box/loading.svelte';
    import NewEntryForm from '../components/form/newEntry.svelte';
    import BtnContainer from '../components/box/btnContainer.svelte';
    import InfoBox from '../components/box/infoBox.svelte';
    import lang from '../utils/lang';
    import { notifier } from '@beyonk/svelte-notifications';
    import xssReplace from '../utils/xss';
    import censoreFilter from '../utils/censore';
    import loadEntrys from '../utils/loadEntrys';

    function contentParser(obj)
    {
        return xssReplace(censoreFilter(JSON.parse(JSON.stringify(obj))).document.content).replace(/\n/g, "<br />")
    }

    function handleCommentStatus(status)
    {
        showComments = status
    }

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

<style>
    .box-title {
        margin-bottom : 8px;
        font-size : 1.2rem;
    }

    .box-content {
        padding : 1rem;
        padding-bottom : 1rem;
        background: #00000026;
        border-radius : 4px;
        margin-bottom:0.5rem;
    }

    .comment-container {
        padding: 0.5rem 1rem;
        margin-top: 0.5rem;
        background: rgb(0 0 0 / 20%);
        border-radius: 4px;
    }

</style>