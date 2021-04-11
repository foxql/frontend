import App from './App.svelte';
import {foxql} from 'foxql';
import langApi from './utils/lang/api'
import lang from './utils/lang'
import { notifier } from '@beyonk/svelte-notifications'

const client = new foxql();

client.listenEvents([
	'onSearch',
	'onRandom',
	'onDocumentByRef'
])

client.openNativeCollections();

client.use('storageOptions', {
    saveInterval : true
});

client.use('documentLengthInterval', {
    active : true,
    interval : 800,
    maxDocumentsInCollections : [
        {
            collection : 'entrys',
            maxDocument : 1000
        }
    ]
});

client.open();

const collection = client.database.useCollection('entrys');

client.peer.socket.on('actionList', (list)=>{
    let dedectedNewDocument = false;
    list.forEach(item => {
        if(item.type == 'new-document') {
            const doc = item.document;
            if(collection.documents[doc.documentId] === undefined) {
                collection.addDoc(doc)
                dedectedNewDocument = true;
            }
        }
    });

    if(dedectedNewDocument) {
        notifier.success(lang.APP.CACHED_NEW_ENTRYS, 1200)
    }
})

client.peer.socket.emit('actionList', true)

window.client = client;

const app = new App({
	target: document.body,
	props: {
		client: client
	}
});

const langCache = localStorage.getItem('lang') || false;


if(!langCache) {
	langApi();
}

export default app;