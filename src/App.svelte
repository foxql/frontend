<script>
	export let client;
	import {Router, Route} from 'svelte-routing';

	import Routes from './routers.js';
	import Navbar from './components/navbar.svelte';
	import Home from './views/home.svelte';

	import Stats from './components/stats.svelte';
	import Trends from './components/trends.svelte';
	import Footer from './components/footer.svelte';
	import Console from './components/console.svelte';

	import SearchBox from './components/searchBox.svelte';

	import Upcoming from './components/upcoming.svelte';
	export let url = ''

	let upcomingPageShow = true;

	let params = (new URL(document.location)).search || '';
	const token = params.split('access=');
	if(token.length > 1) {
		upcomingPageShow = false;
	}
	
</script>
<style>
	.left-side {
		width: 22.1%;
		background:#f9f9f9;
		position:fixed;
		height: 100%;
	}

	.middle-side {
		flex-basis: 65%;
		font-family: 'Roboto', sans-serif;
		margin-left:22%;
	}
	.right-side {
		flex-basis: 33%;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
	}

</style>

{#if upcomingPageShow}
	<Upcoming/>
	{:else}

	<div class = "flex-container h-100">
	
		<div class = "left-side flex-item">
			<Navbar/>
		</div>
	
		<div class = "middle-side flex-item  pd-l-1 pd-r-1">
			<SearchBox/>
			<Router url="{url}">
				{#each Routes as route} 
					{#if route.client !== undefined} 
						<Route path="{route.path}" component={route.component} client = {client}></Route>
						{:else}
						<Route path="{route.path}" component={route.component}></Route>
					{/if}
					
				{/each}
				<Route path="/"><Home client={client}/></Route>
			</Router>
		</div>
	
		<div class = "right-side flex-item h-100 pd-l-1 pd-r-2">
			<Trends client = {client}/>
			<Console client = {client}/>
			<Stats client = {client}/>
			<Footer/>
		</div>
	
	</div>

{/if}

