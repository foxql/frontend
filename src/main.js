import App from './App.svelte';
import {foxql} from 'foxql';
import langApi from './utils/lang/api'
import offerMigrator from './utils/offeredDocumentMigration'

const client = new foxql();

client.listenEvents([
	'onSearch',
	'onRandom',
	'onDocumentByRef',
    'onSync',
    'onDocumentByTimeDiff'
])


client.peer.use('socketOptions', {
    host : '127.0.0.1',
    port : 3000,
    protocol : 'http'
});


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


/** Auto add offers documents */

offerMigrator(client, 2000)


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