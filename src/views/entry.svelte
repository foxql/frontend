<script>
    export let client;
    export let title;
    export let id;

    import NewDocument from '../components/newEntry.svelte';
    import ActionButtons from '../components/actionButtons.svelte';
    import { beforeUpdate } from 'svelte';

    async function loadDocuments()
    {
        let documents = await client.findDocument({  
            ref : id,
            collection : 'entrys',
            timeOut : 500
        });

        let documentMap = {};

        /** Consensus! */
        documents.forEach( doc => {
            if(documentMap[doc.documentSubId] == undefined ) {
                doc.recieveCount = 1;
                documentMap[doc.documentSubId] = doc;
            }else{
                documentMap[doc.documentSubId].recieveCount++;
            }
        });


        return Object.values(documentMap);
    }

    let promise = loadDocuments()

    beforeUpdate(()=>{
        promise = loadDocuments()
    });
</script>

<style>
    .entry-sub-content {
        padding: 0.5rem;
        border: 1px solid #eee;
        background: rgb(247 249 250);
    }

    .big-title {
        font-size:1.4rem;
    }
</style>

<div class = "card pd-1">
    <div class = "card-title pd-b-05 big-title">{title}</div>
    {#await promise}
        loading...
    {:then documents}

        {#each documents as doc} 
                <div class = "card-body entry-sub-content pd-b-05">
                    {doc.content}

                    <div class = "card-body-footer">
                        <ActionButtons client = {client} doc = {doc} collection = 'entrys'></ActionButtons>
                    </div>
                </div>
        {/each}

    {/await}
</div>



<NewDocument client = {client} title = {title}/>