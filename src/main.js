import App from './App.svelte';

import foxql from 'foxql';

const client = new foxql();

client.pushEvents([
    'onDocument',
	'onSearch',
	'onRandom'
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