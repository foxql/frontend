
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
        z-index: 2038;
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
    import { onMount } from 'svelte';
    import {fade, fly} from 'svelte/transition'
    let showButton = false;
    let watchingElement = window;

    onMount(()=> {
        const windowWidth = window.innerWidth;
        let currentScrollPos = 0;

        if(windowWidth < 920) {
            watchingElement = document.querySelector('.center');
            currentScrollPos = watchingElement.scrollTop;
        }else{
            currentScrollPos = watchingElement.scrollY;
        }

        function checkPosition ()
        {
            showButton = currentScrollPos > 300 ? true : false
        }

        watchingElement.onscroll = (e)=> {
            if(watchingElement.scrollY !== undefined) {
                currentScrollPos = watchingElement.scrollY;
            }else{
                currentScrollPos = watchingElement.scrollTop;
            }
            
            checkPosition()
        }
    })

    function handleButton() {
        watchingElement.scrollTo(0, 0);
    }

</script>