<script>
	import {Router, Route} from 'svelte-routing';
	import Routes from './routers.js';
	import Navbar from './components/navbar.svelte'

	import Home from './views/home.svelte';
	import Trends from './components/trends.svelte';
	import Footer from './components/footer.svelte';
	import Waiting from './components/waiting.svelte';
	import Stats from './components/stats.svelte';

	export let url = "";
	export let client;
</script>
<Navbar/>

<Waiting client = {client} />

<div class = "container">
	<div class ="content">
		<Router url="{url}">
			{#each Routes as route} 
				{#if route.client !== undefined} 
					<Route path="{route.path}" component={route.component} client = {client}></Route>
					{:else}
					<Route path="{route.path}" component={route.component}></Route>
				{/if}
				
			{/each}
			<Route path="/"><Home client={client}/></Route>
			<Route/>
		</Router>
	</div>
	
	<div class ="right-side">
		<Trends/>
		<Stats client = {client}/>
		<Footer/>
	</div>
</div>
