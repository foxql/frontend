{#await promise}
    <Loading/>
{:then data}
    {#if data.count <= 0}

           <InfoBox {...lang.INFO_CARD.NOT_FOUND}/>

        {:else}

            <div class = "box">
                <div class = "box-title">
                    {title}
                </div>
            
 

            {#each data.results as item}

                    <div class = "box-content">
                        <BtnContainer doc = {item.doc} client = {client} />
                        {@html xssReplace(item.doc.content).replace(/\n/g, "<br />")}
                    </div>
            {/each}

        </div>

    {/if}
    
    <div class = "box box-primary">
        {#if title == ''}
            <NewEntryForm height = '100' client = {client}/>
            {:else}
            <NewEntryForm height = '100' title = {title} client = {client}/>
        {/if}
    </div>
{/await}


<script>
    export let client;
    export let id;
    export let entryKey;

    let title = '';

    import Loading from '../components/box/loading.svelte';
    import NewEntryForm from '../components/form/newEntry.svelte';
    import BtnContainer from '../components/box/btnContainer.svelte';
    import InfoBox from '../components/box/infoBox.svelte';
    import lang from '../utils/lang'
    import { notifier } from '@beyonk/svelte-notifications'

    import xssReplace from '../utils/xss'

    const collection = client.database.useCollection('entrys');

    async function query() {

        let clonedDocuments = false;

        const queryObject = {
            ref : id,
            collection : 'entrys',
            match : {
                field : 'entryKey',
                value : 'parent-key'
            }
        };

         /** Search on my index */

         let documentPool = []
        const findInIndexs = collection.indexs['entryKey'][entryKey] || false;
        if(findInIndexs) {
            Object.keys(findInIndexs).forEach((ref)=>{
                documentPool.push(
                    collection.getDoc(ref)
                );
            })
        }

        /** Search on my index */

        let send = await client.sendEvent(queryObject, {
            timeOut : 450, // destroy 1.2s listener
            peerListener : 'onDocumentByRef',
            documentPool : documentPool
        });

        if(send.count > 0) {
            title = send.results[0].doc.title;

            send.results.sort((a,b)=>{
                return new Date(a.doc.createDate) - new Date(b.doc.createDate);
            });

            send.results.forEach((item)=>{
                const doc = item.doc;

                const documentId = doc.documentId;

                if(collection.documents[documentId] == undefined) {
                    clonedDocuments = true;

                    collection.addDoc(doc)
                }
                
            }); 


            if(clonedDocuments) {
                notifier.success(lang.APP.CACHED_NEW_ENTRYS)
            }

        }

        return send;
    }

    const promise = query();
</script>

<style>
    .box-title {
        margin-bottom : 8px;
        font-size : 1.2rem;
    }

    .box-content {
        padding : 1rem;
        padding-bottom : 1.5rem;
        background: #00000026;
        margin-bottom : 8px;
        border-radius : 4px;
    }
</style>