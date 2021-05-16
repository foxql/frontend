<script>
	export let client;
	import App from './layouts/app.svelte';

	import { NotificationDisplay } from '@beyonk/svelte-notifications'

	let themes = { 
		danger: '#712829',
		success: '#529259',
		warning: '#f0ad4e',
		info: '#5bc0de',
		default: '#aaaaaa' 
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

<App client = {client}/>


