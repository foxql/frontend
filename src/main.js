import App from './App.svelte';

import foxql from 'foxql';
import censoredFilter from './helpers/censoredFilter.js';

const client = new foxql();

client.censored = censoredFilter;

client.peer.use('socketOptions', {
    host : '127.0.0.1',
    port : 3000,
    protocol : 'http'
});

client.pushEvents([
	'onSearch',
	'onRandom',
	'onDocumentByRef'
])

client.openNativeCollections();

client.use('storageOptions', {
    saveInterval : true
});

client.open();


window.client = client;
const app = new App({
	target: document.body,
	props: {
		client: client
	}
});

export default app;