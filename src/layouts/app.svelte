{#if !pwaMode}
    <PlayStore />
{/if}

<Navbar/>


<div class = "container">

    <div class = "side left">
        <Offers />
    </div>
    
    <div class = "side center">
        <HomeNavbar/>  
        <Router url="{url}">
            {#each routes as route}
                <Route path="{route.path}" component="{route.component}" client = {client}/>
            {/each}
        </Router>
    </div>

    <div class = "side right">
        <Trends client = {client}/>
        <Footer />
    </div>
    
</div>


<MobileNavbar/>

<ScrollTop />

<Waiting 
    client = {client}
/>

<script>
    export let client;
    import Navbar from '../components/navbar/appNavbar.svelte';
    import MobileNavbar from '../components/navbar/appMobileNavbar.svelte';
    import HomeNavbar from '../components/navbar/homeNavbar.svelte';
    import ScrollTop from '../components/scroll/top.svelte';
    import Waiting from '../components/waiting/waiting.svelte';

    import Trends from '../components/sidebar/trends.svelte';
    import Footer from '../components/sidebar/footer.svelte';
    import Offers from '../components/sidebar/offers.svelte';

    import PlayStore from '../components/playstore/index.svelte'

    import { Router, Route } from "svelte-routing";
    
    import routes from '../routes.js';

    const pwaMode = window.matchMedia('(display-mode: standalone)').matches || false;

    export let url = '';
</script>


<style>
    .container {
        display:flex;
        padding : 5rem 0rem;
        justify-content: center;
        width:85%;
        margin:0 auto;
    }

    .side {
        margin-right : 1rem;
    }

    .container .left {
        width: 23%;
    }

    .container .center {
        width : 52%;
        min-height:600px;
        padding-bottom: 4rem;
    }

    .container .right {
        width: 25%;
    }
    

    .side:last-child {
        margin-right : 0;
    }

    @media screen and (max-width: 992px) {

        .container {
            padding : 0rem;
            width: 100%;
            margin-top: 0.5rem;
        }

        .container .center {
            width : 100%;
            margin-right: 0;
        }

        .container .right, .left {
           display:none;
        }

    }


</style>