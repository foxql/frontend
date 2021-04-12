<script>
    export let client;

    import Navbar from '../components/navbar/landingNavbar.svelte';
    import NewEntry from '../components/form/landingNewEntry.svelte';
    
    import lang from '../utils/lang'

    function handleLitePaper()
    {
        const dedectedLang = localStorage.getItem('lang') || 'en';
        if(dedectedLang === 'tr') {
            window.location.href = 'https://github.com/foxql/foxql/wiki/LitePaper-(TR)'
        }else{
            window.location.href = 'https://github.com/foxql/foxql/wiki/LitePaper-(EN)' 
        }

        
    }

</script>

<style>
    .container {
        padding : 1em 5rem;
        display: flex;
        flex-direction: column;
    }

    .section1 {
        padding : 1rem;
        margin-top: 8rem;
        border-radius: 8px;
        color : var(--yellow-1);
        display: flex;
        width:100%;
    }

    .section1 h1 {
        font-size:4rem;
    }

    .section1 .section-item1 {
        width: 33%;
    }

    @media screen and (max-width: 992px) {
       .container {
           padding : 0 !important;
       }
       .section1 {
           margin-top: 2rem;
           flex-direction: column;
           width:100%;
       }

       .section1 .section-item1 {
           width : 100%;
       }

       .section1 .section-item1 h1{
            font-size : 3rem;
       }
       .section1 .section-item1 h3{
            width: fit-content;
       }
    }


    .landing-button-container {
        display: flex;
        justify-content: center;
        padding-bottom:1rem;
    }

    .landing-button-container button{

        padding : 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        font-size:1rem;
        background : #fffc;

    }


</style>

<div class = "container">
    <div class = "section1">
        <div class = "section-item1">
            <h1>{lang.LANDING.BIG_TITLE}</h1>
            <h3>{lang.LANDING.RIGHT_PARAGRAPH}</h3>
        </div>
        <NewEntry client = {client}/>
    </div>

    <Navbar/> 

    <div class = "landing-button-container">
        <button  on:click="{handleLitePaper}">LitePaper</button>
    </div>
</div>