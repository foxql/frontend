
<div class = "section-item2" onsubmit = "return false;">
    <img src = "./assets/landing.svg">
    <button on:click="{handleButton}">{lang.LANDING.FORM_BUTTON}</button>
</div>

<script>
    import { notifier } from '@beyonk/svelte-notifications'
    import lang from '../../utils/lang'

    function handleButton()
    {
        localStorage.setItem('landing', 'true')
        notifier.success(lang.NOTIFICATION.REDIRECT, 1200) 
        setTimeout(()=>{
            window.location.href = window.location.href;
        }, 1100);
        
    }
</script>

<style>
    .section-item2 {
        margin-left: auto;
        width: 35%;
        position:relative;
        display:flex;
        align-items: center;
        flex-direction: column;
        margin-top:1rem;
    }

    .section-item2 img {
        width : 80%;
        margin-bottom:1rem;
    }
    

    .section-item2 button {
       width: 100%;
       padding:0.5rem 1rem;
       border-radius: 8px;
       cursor: pointer;
       background : rgb(0 0 0 / 30%);   
       color : var(--yellow-1);
    }


    @media screen and (max-width: 992px) {
       .section-item2 {
            width: 100% !important;
            margin-top: 3rem;
       }
    }
</style>
