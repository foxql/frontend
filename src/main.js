import App from './App.svelte';
import {foxql} from 'foxql';
import langApi from './utils/lang/api'

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