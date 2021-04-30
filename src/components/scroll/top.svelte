
{#if showButton}
    <button on:click="{handleButton}" in:fly="{{ y: 200, duration: 500 }}" out:fade>
        <span class = "fa fa-angle-up"></span>
    </button>
{/if}


<style>
    button {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        padding: 0.5rem;
        border-radius: 100px;
        font-size: 1.3rem;
        background: #eee;
        color: #555;
    }


    @media screen and (max-width: 992px) {
        button {
            right: 1rem;
            bottom: 5rem;
            font-size: 1.1rem;
        }
    }
</style>


<script>
    import {fade, fly} from 'svelte/transition'
    let showButton = false;

    let currentScrollPos = window.scrollY;

    function handleButton() {
        window.scrollTo(0, 0);
    }

    function checkPosition ()
    {
        showButton = currentScrollPos > 300 ? true : false
    }

    window.onscroll = (e)=> {
        currentScrollPos = window.scrollY;
        checkPosition()
    }

    checkPosition()
</script>