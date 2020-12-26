<script>
	import { Router, Route } from "svelte-routing";
	import Routes from './routers.js';
	import Sidebar from './components/sidebar.svelte';

	import Home from './views/home.svelte';

	export let url = "";
	export let client;
</script>

<div class="pure-g layout">
    <div class="pure-u layout-item sidebar">
		<Sidebar/>
	</div>
	<div class="pure-u layout-item content pure-g" > 
		<Router url="{url}">
			{#each Routes as route} 
				<Route path="{route.path}" component={route.component} client = {client}></Route>
			{/each}
			<Route path="/"><Home client={client}/></Route>
			<Route/>
		</Router>
	</div>
</div>