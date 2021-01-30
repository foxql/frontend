<script>
    export let client;
    import {link} from 'svelte-routing';
    import NotFoundCard from '../components/notFoundCard.svelte';

    async function getDocuments() {
        let documentMap = {};
        return new Promise((resolve)=>{
            client.randomDocument({
                limit : 2,
                collection : 'entrys',
                timeOut : 550  
            },(documents)=>{
                documents.forEach( item => {
                    const subDocumentId = item.subDocumentId;
                    const documentId = item.documentId;
                    if(documentMap[documentId] === undefined) {
                        item.subDocuments = [];
                        item.recieverCount = 1;
                        documentMap[documentId] = {
                            entry : item,
                            subDocumentMap : {}
                        };

                        documentMap[documentId].subDocumentMap[subDocumentId] = 1;
                    }else{
                        documentMap[documentId].entry.recieverCount += 1;
                        if(documentMap[documentId].subDocumentMap[subDocumentId] == undefined){
                            documentMap[documentId].subDocumentMap[subDocumentId] = 1;
                            documentMap[documentId].entry.subDocuments.push(item);
                        }else{
                            documentMap[documentId].subDocumentMap[subDocumentId] += 1;
                        }
                        
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

        {#if Object.values(documents).length <= 0}

            <NotFoundCard/>

        {/if}

        {#each Object.values(documents) as document}
           <div class = "card pd-1 card-bg-primary m-t-05 rounded-8">
                <div class = "card-title pd-b-05">
                    <a href = "entry/{document.entry.documentId}" use:link>{document.entry.title}</a>
                </div>
                <div class = "card-body pd-b-05">
                    {document.entry.content}

                    {#if document.entry.subDocuments.length > 0} 

                        {#each document.entry.subDocuments as subDocument} 

                            <div class = "sub-content">
                                {subDocument.content}
                            </div>

                        {/each}

                    {/if}
                </div>
            </div>
        {/each}
{/await}
