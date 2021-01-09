<script>
    export let client;
    import {link} from 'svelte-routing';
    import NewDocument from '../components/newDocument.svelte';
    import Searchbox from '../components/searchBox.svelte';

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

<style>
    .entry-result {
        background: #f1ebeb5e !important;
    }
    .entry-result .card-header{
        font-family: 'Poppins';
        text-align: left;
        line-height: 1;
        text-transform: none;
    }

    .entry-result .card-body {
        font-size: 0.83rem;
        font-family: 'Open Sans';
    }

    .card-body .sub-content {
        box-sizing: border-box;
        margin-top: 10px;
        background: #cccccc26;
        width: 90%;
        position: relative;
        margin-left: 5%;
        padding: 0.4rem;
    }
</style>

<Searchbox/>

{#await eventPromise}
    loading...
{:then documents}
        {#each Object.values(documents) as document}
           <div class = "card entry-result">
                <div class = "card-header">
                    <a href = "entry/{document.documentId}/{document.title}" use:link>{document.title}</a>
                </div>
                <div class = "card-body">
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
