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

            {#each data.query.results as item}

                    <div class = "box-content">
                        {@html xssReplace(censoreFilter(JSON.parse(JSON.stringify(item.doc))).document.content).replace(/\n/g, "<br />")}

                        <BtnContainer doc = {item.doc} client = {client} replyBtn = {true}/>
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
</style>