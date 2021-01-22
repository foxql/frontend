<script>
    export let client;
    import {link} from 'svelte-routing';
    import NewDocument from '../components/newEntry.svelte';

    async function getDocuments() {
        let documentMap = {};
        return new Promise((resolve)=>{
            client.randomDocument({
                limit : 2,
                collection : 'entrys',
                timeOut : 500  
            },(documents)=>{
                documents.forEach( item => {
                    if(documentMap[item.documentId] === undefined) {
                        item.subDocuments = [];
                        documentMap[item.documentId] = item;
                    }else{
                        documentMap[item.documentId].subDocuments.push(item);
                    }
                });
                resolve(documentMap)
            });
        });
    }

    const eventPromise = getDocuments();
</script>


{#await eventPromise}
    loading...
{:then documents}
        {#each Object.values(documents) as document}
           <div class = "card pd-1">
                <div class = "card-title pd-b-05">
                    <a href = "entry/{document.documentId}/{document.title}" use:link>{document.title}</a>
                </div>
                <div class = "card-body pd-b-05">
                    {document.content}

                    {#if document.subDocuments.length > 0} 

                        {#each document.subDocuments as subDocument} 

                            <div class = "sub-content">
                                {subDocument.content}
                            </div>

                        {/each}

                    {/if}
                </div>
            </div>
        {/each}

        <NewDocument client = {client} />
{/await}
