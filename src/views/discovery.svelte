<script>
    export let client;
    import {link} from 'svelte-routing';
    import NotFoundCard from '../components/notFoundCard.svelte';
    import SearchBox from '../components/searchBox.svelte';
    import Header from '../components/header.svelte';
    import Meta from '../components/meta.svelte';
    import enums from '../enums/enums.js';

    let metadata = {
        title : enums.DISCOVERY,
        description : enums.DISCOVERY_DESCRIPTION
    };

    async function getDocuments() {
        const queryObject = {
            limit : 2,
            collection : 'entrys'
        };

        const query = await client.sendEvent(queryObject, {
            timeOut : 1000, // destroy 1.2s listener
            peerListener : 'onRandom'
        });

        if(query.count <= 0) {
            return [];
        }

        return query.results.filter((item)=> {
            const filter = client.censored(item.doc);
            if(!filter.censored) {
                item.doc = filter.document;
            }else{
                return false;
            }
            
            return item;    
        });
    }

    const eventPromise = getDocuments();
</script>

<Meta {metadata} />

<Header content = "{enums.DISCOVERY}"/>

<div class = "pd-l-1 pd-r-1">
{#await eventPromise}
    Loading from peers...
{:then documents}
    <SearchBox/>
        {#if documents.length <= 0}

            <NotFoundCard/>

        {/if}

        {#each documents as item}
           <div class = "card pd-1 card-bg-primary m-t-05 rounded-8">
                <div class = "card-title pd-b-05">
                    <a href = "entry/{item.doc.documentId}" use:link>{item.doc.title}</a>
                </div>
                <div class = "card-body pd-b-05">
                    {item.doc.content}
                </div>
            </div>
        {/each}
{/await}
</div>