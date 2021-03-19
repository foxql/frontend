<script>
	export let client;
	import Landing from './layouts/landing.svelte';
	import App from './layouts/app.svelte';

	import { NotificationDisplay } from '@beyonk/svelte-notifications'

	const storage = localStorage.getItem('foxql-storage') || false;
</script>
<NotificationDisplay/>
{#if !storage}
		<Landing client = {client}/>
	{:else}
		<App client = {client}/>
{/if}

