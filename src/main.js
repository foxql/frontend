import App from './App.svelte';
import {foxql} from 'foxql';
import langApi from './utils/lang/api'

const client = new foxql();

client.listenEvents([
	'onSearch',
	'onRandom',
	'onDocumentByRef',
    'onOfferedDocuments',
    'onDocumentByTimeDiff'
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


/** Auto migrate */

let schema = collection.schema;

if(schema.content.min == 20) {
    schema.content.min = 1;
}

if(schema.title.min == 4) {
    schema.title.min = 2;
}

client.peer.onPeer('new-document-listener', async (data)=>{
    collection.addDoc(
        data.doc
    )
});



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