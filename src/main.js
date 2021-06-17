import App from './App.svelte';
import {foxql} from 'foxql';
import langApi from './utils/lang/api'

const client = new foxql();
client.peer.maxSocketConnectionCheckInterval = 500;


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
            maxDocument : 2500
        }
    ]
});

client.peer.use('peerInformation', {
    alias : localStorage.getItem('node-alias') || client.peer.myPeerId,
    avatar : localStorage.getItem('node-avatar') || './media/emptyAvatar.png',
    explanation : localStorage.getItem('node-explanation') || ``
})


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



window.client = client;

const app = new App({
	target: document.body,
	props: {
		client: client
	}
});

const langCache = localStorage.getItem('lang') || false;


client.peer.socket.emit('actionList', true)

if(!langCache) {
	langApi();
}

export default app;