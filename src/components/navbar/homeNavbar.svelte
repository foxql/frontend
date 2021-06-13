{#if visible}
    <div class = "navbar">
        <div class = "navbar-container">
            <div class = "nav-item {currentPage == 'discovery' ? 'active' : ''}">
                <a href = "/discovery" use:link on:click="{handleNavItem}">
                    <span class = "fa fa-globe-europe"></span> {lang.NAVBAR.DISCOVERY}</a>
            </div>
    
            <div class = "nav-item {currentPage == 'news' ? 'active' : ''}">
                <a href = "/news" use:link on:click="{handleNavItem}">
                    <span class = "fa fa-newspaper"></span> {lang.NAVBAR.NEWS} 
                    {#if newDocumentCount > 0}
                        <small>
                            {newDocumentCount}
                        </small>
                    {/if}
                </a>
            </div>
    
            <div class = "nav-item {currentPage == 'trends' ? 'active' : ''} home-navbar-trend-link" >
                <a href = "/trends" use:link on:click="{handleNavItem}">
                    <span class = "fa fa-fire"></span> {lang.NAVBAR.TRENDS}</a>
            </div>
        </div>
    </div>
{/if}


<script>
    import { link } from "svelte-routing";
    import lang from '../../utils/lang';
    let visible = true;

    let newDocumentCount =  localStorage.getItem('new-documents') || 0;

    
    let visibleArray = [
        '',
        'discovery',
        'news',
        'trends'
    ];

    let currentPage = '';

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
        currentPage = path;
        visible = visibleArray.includes(currentPage);

        newDocumentCount = localStorage.getItem('new-documents') || 0;

        if(path == 'news') {
            localStorage.setItem('new-documents', 0)
        }
    }


</script>


<style>

    .navbar {
        width: 100%;
        background : rgb(0 0 0 / 35%);
        padding : 1rem;
        margin-bottom: 1rem;
        border-radius: 8px;
    }

    .nav-item {
        position:relative;
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

    .home-navbar-trend-link {
        display:none;
    }

    .navbar .navbar-container {
        position: relative;
        display: flex;
        width: max-content;
        left: 0px;
        top: 0px;
        padding-right: 1rem;
    }

    small {
        margin-left: -3px;
        color: #d43a3a;
    }

    @media screen and (max-width: 992px) {
        .nav-item {
            font-size: 0.8rem;
        }

        .navbar {
            overflow-x: scroll;
            border-radius: 0px;
        }

        .home-navbar-trend-link {
            display: block;
        }


    }
</style>