<script>
    import {link} from "svelte-routing";
    import Routes from '../routers.js';
</script>

<div class = "navbar">
    <div class="menu-item navbar-logo">
        <a href="/" class="pure-menu-link" use:link>FoxQL</a>
    </div>
    <div class = "navbar-right">
        {#each Routes as route} 
            <div class="menu-item">
                {#if route.hideMenu == undefined} 
                    <a href="{route.path}" class="pure-menu-link" use:link>{route.name}</a>
                {/if}
            </div>
        {/each}
    </div>

</div>