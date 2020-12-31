<script>
    import {link} from "svelte-routing";
    import Routes from '../routers.js';
</script>

<style>
    .menu-btn a {
        color : #131517;
        font-size:0.9rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }

    small {
        font-size: 13px;
        color: #555!important;
    }
</style>

<div class = "navbar">
    <div class="menu-item navbar-logo">
        <a href="/" class="pure-menu-link" use:link>FoxQL <small>MVP</small></a>
    </div>
    <div class = "navbar-right">
        {#each Routes as route} 
        {#if route.hideMenu == undefined}
            <div class="menu-item menu-btn">
                {#if route.hideMenu == undefined} 
                    <a href="{route.path}" class="pure-menu-link" use:link>
                        {route.name}   
                    </a>
                {/if}
            </div>
            {/if}
        {/each}
    </div>

</div>