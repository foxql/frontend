<script>
    import {link} from "svelte-routing";
    import Routes from '../routers.js';
</script>

<style>
    .pure-menu-heading {
        margin-top:20px;
        margin-bottom:20px;
        text-align: center;
        color : #eee;
    }
</style>
<div class="pure-menu">
    <a href="/" class="pure-menu-heading" use:link>FoxQL</a>
    <ul class="pure-menu-list">
            {#each Routes as route} 
            <li class="pure-menu-item">
                {#if route.hideMenu == undefined} 
                    <a href="{route.path}" class="pure-menu-link" use:link>{route.name}</a>
                {/if}
            </li>
            {/each}
        <li class="pure-menu-item menu-centered-button fixed-bottom">
            <a class="primary-button pure-button" href = "whisper" use:link>Fısılda</a>
        </li>
    </ul>
</div>