<div class = "navbar">
    <div class = "navbar-container">
        <div class = "logo nav-item">
            <a href = "/" use:link>
                <img src = "media/logo.png" alt = "logo"/>
            </a>
        </div>
    
        <div class = "nav-item">
            <a href = "/node" use:link>
                <span class = "fa fa-user"></span> {lang.NAVBAR.NODE}
            </a>
        </div>

        <div class = "nav-item">
            <a href = "/share" use:link>
                <span class = "fa fa-paper-plane"></span> {lang.NAVBAR.SHARE}
            </a>
        </div>
    
        <div class = "search-box">
            <SearchBox/>
        </div>
    </div>
</div>

<script>
    import { link } from "svelte-routing";
    import lang from '../../utils/lang';
    import SearchBox from '../form/searchBox.svelte';

</script>


<style>
    .navbar {
        display: flex;
        width: 100%;
        padding : 1rem 0rem;    
        background: #1a1f27; 
        position: fixed;
        left : 0px;
        top:0px;
        box-shadow: 3px 2px 1px #222;
        align-items: center;
        z-index: 3;
        justify-content: center;
    }

    .navbar .navbar-container {
        width : 85%;
        display: flex;
    }

    .navbar a {
        color : #eee;
        font-weight:600;
    }

    .navbar .nav-item {
        margin-right : 0.3rem;
        padding : 0.5rem 1rem;
        color : #eee;
        position: relative;
        display: block;
        transition-duration: 0.5s;
    }

    .navbar .logo {
        padding : 0;
        margin-right: 1rem;
    }

    .navbar .logo:hover {
        box-shadow: 0px 2px 0px transparent;
    }

    .navbar .logo img {
        width : 32px;
    }

    .navbar .search-box {
        width:47%;
        position: relative;
        margin-left: 1rem;
    }

    .langs {
        margin-left: auto;
        cursor: pointer;
    }


    @media screen and (max-width: 992px) {
        .navbar {
            display: none;
        }
    }


    /** dropdown */
    .dropdown {
        background: #1a1c1fc2;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        margin-top: 0.5rem;
        left: 0;
        width : 150px;
        display: none;
        padding:0.5rem;
    }

    .dropdown li {
        padding : 0.5rem 1rem;
    }


    .nav-item:hover > ul,
    .nav-item:focus-within > ul,
    ul:hover,
    ul:focus {
        visibility: visible;
        opacity: 1;
        display: block;
    }

    li:hover,
    li:focus-within {
        background: #333;
        cursor: pointer;
    }



        
</style>

