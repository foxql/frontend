<script>
    export let encodedDocument;
    export let client;
    let document;

    const windowLocation =  window.document.location;

    encodedDocument = encodedDocument.replace(/foxql_slash/gi, '/')
    
    let metadata = {
        title : 'foxql - share',
        description : 'foxql - share'
    };

    import utf8 from 'utf8';
    import base64 from 'base-64';
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
    import enums from '../enums/enums.js';
    import Meta from '../components/meta.svelte'

    const bytes = base64.decode(encodedDocument);
    const decodedString = utf8.decode(bytes);

    try {
        const targetIndex = client.database.useCollection('entrys');
        document = JSON.parse(decodedString);

        const documentId = document.documentId || '';

        if(!targetIndex.getDoc(documentId)) {
            const add = targetIndex.addDoc({
                title : document.title,
                content : document.content 
            });

            if(add) {
                notifier.success(enums.ENTRY_SHARE.DOCUMENT_CLONED, 1200)
            }
        }

        window.document.location.href = windowLocation.origin+'/entry/'+document.documentId;



    }catch(err)
    {
        notifier.warning('Oups!', 1200);
    }

    let n;

    $ : {
        metadata = {
            title : document.title,
            content : document.content
        };
    }

</script>
<Meta {metadata} />
<NotificationDisplay bind:this={n} />

<div class = "card pd-1 rounded-8 card-bg-primary">
    Redidecting entry page...
</div>