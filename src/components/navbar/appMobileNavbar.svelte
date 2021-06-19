<div class = "navbar">

    <div class = "nav-item {currentPage == 'discovery' ? 'active' : ''}">
        <a href = "/discovery" use:link on:click="{handleNavItem}">
            <span class = "fa fa-search"></span>
        </a>
    </div>
    

    <div class = "nav-item {currentPage == 'trends' ? 'active' : ''}">
        <a href = "/trends" use:link on:click="{handleNavItem}">
            <span class = "fa fa-fire"></span>
        </a>
    </div>

    <div class = "nav-item {currentPage == 'notification' ? 'active' : ''}">
        <a href = "/notification" use:link on:click="{handleNavItem}">
            <span class = "fa fa-bell"></span>
        </a>
    </div>

    <div class = "nav-item {currentPage == 'node' ? 'active' : ''}">
        <a href = "/node" use:link on:click="{handleNavItem}">
            <span class = "fa fa-user"></span>
        </a>
    </div>

</div>

<script>
    import { link } from "svelte-routing";

    let currentPage = '';

    function handleNavItem()
    {
        const hrefArray = this.href.split('/');
        currentPage = hrefArray[hrefArray.length - 1];
    }
</script>


<style>
    .navbar {
        display: none;
        width: 100%;
        padding :0.5rem 1rem;   
        background: #1a1f27; 
        position: fixed;
        left : 0px;
        bottom:0px;
        box-shadow: 3px 2px 1px #222;
        align-items: center;
        z-index: 3;
        justify-content: space-between;
    }

    .navbar a {
        color : #eee;
        font-weight:600;
    }

    .navbar .nav-item {
        margin-right : 0.3rem;
        padding : 0.5rem 1rem;
        transition: box-shadow 0.5s ease;
        border-radius: 100px;
    }

    .navbar .active a {
        color : #ffd369;;
    }

    @media screen and (max-width: 992px) {
        .navbar {
            display: flex;
            z-index: 9;
        }
    }
    
</style>

