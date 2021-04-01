<script>
	export let client;
	import Landing from './layouts/landing.svelte';
	import App from './layouts/app.svelte';

	import { NotificationDisplay } from '@beyonk/svelte-notifications'

	const storage = localStorage.getItem('landing') || false;

	let themes = { // These are the defaults
		danger: '#712829',
		success: '#529259',
		warning: '#f0ad4e',
		info: '#5bc0de',
		default: '#aaaaaa' // relates to simply '.show()'
	}

</script>

<style>
	:global(.toasts) {
		bottom: 10px !important;
		top : auto !important;
	}

	@media screen and (max-width: 992px) {
		:global(.toasts) {
			bottom: 50px !important;
		}
	}
</style>

<NotificationDisplay {themes}/>
{#if !storage}
		<Landing client = {client}/>
	{:else}
		<App client = {client}/>
{/if}

