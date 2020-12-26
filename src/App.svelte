<script>
	import {Router, Route} from 'svelte-routing';
	import Routes from './routers.js';
	import Navbar from './components/navbar.svelte'

	import Home from './views/home.svelte';

	import Searchbox from './components/searchBox.svelte';
	import Trends from './components/trends.svelte';

	export let url = "";
	export let client;
</script>

<Navbar/>

<div class = "container">
	<div class ="content">

		<Searchbox/>

		<Router url="{url}">
			{#each Routes as route} 
				<Route path="{route.path}" component={route.component} client = {client}></Route>
			{/each}
			<Route path="/"><Home client={client}/></Route>
			<Route/>
		</Router>
	</div>
	
	<div class ="right-side">
		<Trends/>
	</div>
</div>
