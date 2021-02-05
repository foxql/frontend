<script>
    import {link} from "svelte-routing";
    import Routes from '../routers.js';
    import MobileCheck from '../helpers/mobileDeviceCheck.js';

    let path = window.document.location.pathname.replace('/','')

    function handlerNavbarClick()
    {
        path =  this.href.split('/')[3];
    }

    import enums from '../enums/enums.js';
    
</script>

<style>

    .navbar {
        font-family: 'Open Sans', sans-serif;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
    }

    .navbar .nav-item {
        text-decoration: none;
        font-size:1rem;
        color:#555;
        display:flex;
        align-items: center;
    }

    .navbar .nav-item a {
        text-decoration: none;
        color : #555;
        transition: all ease 0.5s;
        border-radius: 18px;
        font-weight: 600;
    }

    .navbar .nav-item a:hover {
        background: #131517;
        color: #eee;
        border-radius: 20px;
        transition: all ease 0.5s;
    }
    
    .active {
        background: #131517;
        color: #eee !important;
        border-radius: 20px;
        transition: all ease 0.5s;
    }

    .navbar .nav-item a .icon {
        margin-right: 5px;
    }

    .navbar .new-document-btn {
        background : #eee;
    }

    .navbar .nav-logo a{
        background: #131517;
        color: #fff;
        border-radius: 100px;
        font-size:1.3rem;
        margin-left: 3px;
        font-weight: normal;
    }

    .publish-btn {
        width : 100%;
        color: #eee !important;
    }

    .publish-nav {
        text-align: center;
        background: #131517;
        border-radius: 20px;
        margin-bottom:10px;
        margin-top:30px;
    }

</style>
<div class = "navbar pd-l-3 pd-t-1 pd-r-3">

    <div class = "nav-item pd-l-05 pd-b-1 nav-logo" use:link>
       <a href = "/" use:link class = "pd-l-05 pd-r-05" on:click="{handlerNavbarClick}">F</a>
    </div>

        {#each Routes as route} 
        {#if route.hideMenu == undefined}
                {#if route.hideMenu == undefined} 

                    {#if !MobileCheck() && !route.hideDesktop}
                        
                        <div class = "nav-item pd-b-1">
                            <a href = "{route.path}" class = "pd-l-1 pd-r-2 pd-t-05 pd-b-05 {route.path.replace('/','') == path ? 'active' : ''}" use:link on:click="{handlerNavbarClick}">
                                <span class = "{route.icon} icon"></span>
                                <span class = "text">{route.name}</span>   
                            </a>
                        </div>

                        {:else if MobileCheck()}
                        <div class = "nav-item pd-b-1">
                            <a href = "{route.path}" class = "pd-l-1 pd-r-2 pd-t-05 pd-b-05 {route.path.replace('/','') == path ? 'active' : ''}" use:link on:click="{handlerNavbarClick}">
                                <span class = "{route.icon} icon"></span>
                                <span class = "text">{route.name}</span>   
                            </a>
                        </div>


                    {/if}

                {/if}
            {/if}
        {/each}

        {#if !MobileCheck()}
            <div class = "nav-item pd-b-1">
                <a href = "https://boraozer.github.io/foxql" class = "pd-l-1 pd-r-2 pd-t-05 pd-b-05">
                    <span class = "fab fa-github icon"></span>
                    <span class = "text">{enums.DOCUMENTATION}</span>   
                </a>
            </div>
        {/if}

</div>