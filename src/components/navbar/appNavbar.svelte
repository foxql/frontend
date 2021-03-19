<div class = "navbar">
    <div class = "navbar-container">
        <div class = "logo nav-item">
            <a href = "/" use:link>
                <img src = "media/logo.png" alt = "logo"/>
            </a>
        </div>
    
        <div class = "nav-item">
            <a href = "/node" use:link>
                <span class = "fa fa-database"></span> {lang.NAVBAR.NODE}
            </a>
        </div>

        <div class = "nav-item">
            <a href = "/share" use:link>
                <span class = "fa fa-paper-plane"></span> {lang.NAVBAR.SHARE}
            </a>
        </div>
    
        <div class = "nav-search-box">
           <input 
                type = "text" 
                placeholder = "{lang.NAVBAR.SEARCH_INPUT_PLACEHOLDER}"
                on:keydown="{handleKeydown}"
                class = 'search-input'
            />
           <span class = "fa fa-search search-icon"></span>
        </div>

        <div class = "nav-item langs">
            <span class = "fa fa-globe-europe"></span> {lang.NAVBAR.LANGS}

            <ul class="dropdown">
                <li on:click="{handleClick}" data-lang = 'tr'>
                    Türkçe
                </li>
                <li on:click="{handleClick}" data-lang = 'en'>
                    English
                </li>
            </ul>
        </div>
    </div>
</div>

<script>
    import { link, navigate } from "svelte-routing";
    import lang from '../../utils/lang';
    import changeLang from '../../utils/lang/change.js'

    function handleClick ()
    {
        const target = this.dataset.lang;
        changeLang(target)
    }

    function handleKeydown(e)
    {
        if(e.key === 'Enter') {
            const query = this.value.trim()
            if(query === '') {
                return false;
            }
            navigate('search/'+query)
        }
    }

</script>


<style>
    .navbar {
        display: flex;
        width: 100%;
        padding : 1rem 5rem;    
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
        width : 70%;
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

    .navbar .nav-search-box {
        display: flex;
        align-items: center;
        width:47%;
        position: relative;
        margin-left: 1rem;
    }

    .navbar .nav-search-box .search-icon {
        position: absolute;
        right:10px;
    }

    .navbar .nav-search-box input {
        padding:0.5rem 1rem;
        border-radius: 15px;
        width:100%;
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

