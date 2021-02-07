<script>
	export let client;
	import {Router, Route} from 'svelte-routing';

	import MobileCheck from './helpers/mobileDeviceCheck.js';
	

	import Routes from './routers.js';
	import Navbar from './components/navbar.svelte';

	import Stats from './components/stats.svelte';
	import Footer from './components/footer.svelte';
	import Console from './components/console.svelte';
	import Socials from './components/socials.svelte';
	import Share from './views/share.svelte';

	export let url = ''

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
		<div class = "flex-container h-100">
	
			<div class = "left-side flex-item">
				<Navbar/>
			</div>
		
			<div class = "middle-side flex-item pd-b-1">
				<Router url="{url}">
					{#each Routes as route} 
						{#if route.client !== undefined} 
							<Route path="{route.path}" component={route.component} client = {client}></Route>
							{:else}
							<Route path="{route.path}" component={route.component}></Route>
						{/if}
						
					{/each}
					<Route path="/"><Share client={client}/></Route>
				</Router>
			</div>
		
			{#if !MobileCheck()}
				<div class = "right-side flex-item pd-l-1 pd-r-1 pd-b-1">
					<Console client = {client}/>
					<Stats client = {client}/>
					<Socials/>
					<Footer/>
				</div>
			{/if}
	
		
		</div>
