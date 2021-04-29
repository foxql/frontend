<Navbar/>


<div class = "container">
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
    </div>
    
</div>


<MobileNavbar/>

<script>
    export let client;
    import Navbar from '../components/navbar/appNavbar.svelte';
    import MobileNavbar from '../components/navbar/appMobileNavbar.svelte';
    import HomeNavbar from '../components/navbar/homeNavbar.svelte';

    import Trends from '../components/sidebar/trends.svelte';

    import { Router, Route } from "svelte-routing";
    
    import routes from '../routes.js';

    export let url = '';
</script>


<style>
    .container {
        display:flex;
        padding : 5rem 0rem;
        justify-content: center;
    }

    .side {
        margin-right : 1rem;
    }

    .container .center {
        width : 50%;
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

        .container .right {
           display:none;
        }

    }


</style>