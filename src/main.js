import App from './App.svelte';

import foxql from 'foxql';

const client = new foxql();

client.pushEvents([
    'onDocument',
    'onSearch'
])

client.use('storageOptions', {
    saveInterval : true
});

client.open();

const app = new App({
	target: document.body,
	props: {
		client: client
	}
});

export default app;