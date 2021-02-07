<script>
    export let client;
    import {link} from 'svelte-routing';
    import NotFoundCard from '../components/notFoundCard.svelte';
    import SearchBox from '../components/searchBox.svelte';
    import Header from '../components/header.svelte';

    import enums from '../enums/enums.js';

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
                            entry : client.censored(item),
                            subDocumentMap : {}
                        };

                        documentMap[documentId].subDocumentMap[subDocumentId] = 1;
                    }else{
                        documentMap[documentId].entry.recieverCount += 1;
                        if(documentMap[documentId].subDocumentMap[subDocumentId] == undefined){
                            documentMap[documentId].subDocumentMap[subDocumentId] = 1;
                            documentMap[documentId].entry.subDocuments.push(client.censored(item));
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

<Header content = "{enums.DISCOVERY}"/>

<div class = "pd-l-1 pd-r-1">
{#await eventPromise}
    Loading from peers...
{:then documents}
    <SearchBox/>
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
</div>