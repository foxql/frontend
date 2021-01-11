<script>
    import {link} from "svelte-routing";
    import Routes from '../routers.js';
</script>

<style>

    .navbar {
        font-family: 'Open Sans', sans-serif;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        box-sizing: border-box;
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
    

    .navbar .nav-item span {
        margin-right: 12px;
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
       <a href = "/" use:link class = "pd-l-05 pd-r-05" >F</a>
    </div>

        {#each Routes as route} 
        {#if route.hideMenu == undefined}
                {#if route.hideMenu == undefined} 
                    <div class = "nav-item pd-b-1">
                        <a href = "{route.path}" class = "pd-l-1 pd-r-2 pd-t-05 pd-b-05" use:link>
                            <span class = "{route.icon}"></span>{route.name}   
                        </a>
                    </div>
                {/if}
            {/if}
        {/each}

        <div class = "nav-item publish-nav" use:link>
            <a href = "/" class = "pd-l-2 pd-r-2 pd-t-05 pd-b-05 publish-btn">
                <span class = "fas fa-paper-plane"></span> Paylaş
            </a>
         </div>
   

</div>