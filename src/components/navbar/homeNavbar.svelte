{#if visible}
    <div class = "navbar">
        <div class = "nav-item {currentPage == 'home' ? 'active' : ''}">
            <a href = "/home" use:link on:click="{handleNavItem}">
                <span class = "fa fa-random"></span> {lang.NAVBAR.DISCOVERY}</a>
        </div>
        <div class = "nav-item {currentPage == 'news' ? 'active' : ''}">
            <a href = "/news" use:link on:click="{handleNavItem}">
                <span class = "fa fa-newspaper"></span> {lang.NAVBAR.NEWS}</a>
        </div>

        <div class = "nav-item {currentPage == 'trends' ? 'active' : ''}">
            <a href = "/news" use:link on:click="{handleNavItem}">
                <span class = "fa fa-fire"></span> {lang.NAVBAR.TRENDS}</a>
        </div>



    </div>
{/if}


<script>
    import { link } from "svelte-routing";
    import lang from '../../utils/lang';
    let visible = true;
    
    let visibleArray = [
        '',
        'home',
        'news'
    ];

    let currentPage = 'home';

    function handleNavItem(e)
    {
        const hrefArray = this.href.split('/');
        currentPage = hrefArray[hrefArray.length - 1];
    }
    
    document.onclick = function(event) {
        visibleControl();
    };

    document.onkeydown = function(e) {
        if(e.key == 'Enter') {
            const search = Object.values(e.srcElement.classList).includes('search-input')
            if(search) {
                visibleControl()
            }
        }
    } 

    visibleControl();

    function visibleControl()
    {
        const split = document.location.href.split('/');
        let path = split[split.length - 1]
        path = path == '' ? 'home' : path;
        currentPage = path;
        visible = visibleArray.includes(currentPage);
    }


</script>


<style>

    .navbar {
        display: flex;
        width: 100%;
        background : rgb(0 0 0 / 35%);
        padding : 1rem;
        margin-bottom: 1rem;
        border-radius: 8px;
    }

    .nav-item {
        margin-right : 1rem;
        font-size: 1.1rem;
    }

    .nav-item:last-child {
        margin-right: 0;
    }

    .nav-item a {
        color : var(--yellow-1);
        padding-bottom: 0.4rem;
        font-weight: 600;
        transition: all ease 0.5s;
    }

    .active a, .nav-item a:hover{
        box-shadow: 0px 3px 0px #d6b462;
        color: #e0c49b;
    }

    @media screen and (max-width: 992px) {

        .nav-item {
            font-size: 0.8rem;
        }

    }
</style>