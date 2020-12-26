<script>
    import {link} from "svelte-routing";
    import Routes from '../routers.js';

    function handleCloseMenu()
    {
        document.querySelector('.sidebar').style.display = 'none'
    }
</script>

<style>
    .pure-menu-heading {
        margin-top:20px;
        margin-bottom:20px;
        text-align: center;
        color : #eee;
    }
    .menu-close-btn {
        position: absolute;
        right:5px;
        top:5px;
        padding:0.4rem 1rem;
        border:0px;
        border-radius: 3px;
    }

</style>
<div class="pure-menu">
    <a href="/" class="pure-menu-heading" use:link>FoxQL</a>
    <button class = "menu-close-btn" on:click={handleCloseMenu}>X</button>
    <ul class="pure-menu-list"> 
            {#each Routes as route} 
            <li class="pure-menu-item">
                {#if route.hideMenu == undefined} 
                    <a href="{route.path}" class="pure-menu-link" use:link>{route.name}</a>
                {/if}
            </li>
            {/each}
    </ul>
</div>