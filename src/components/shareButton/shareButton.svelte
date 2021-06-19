{#if !hide}
<a href = "/share" use:link in:fly="{{ y: 200, duration: 500 }}" out:fade>
    <span class = "fa fa-paper-plane"></span>
</a>
{/if}



<script>
    import { link } from 'svelte-routing'
    import {fade, fly} from 'svelte/transition'

    let hide = false;

    window.onclick = function(event) {
        const path = window.location.pathname;

        if(path.indexOf('/entry') > -1){
            hide = true;
        }else{
            hide = false;
        }
    };
</script>

<style>
    a {
        position: fixed;
        padding: 1rem 1.2rem 1rem 1rem;
        border-radius: 125px;
        color: #eee;
        background: rgb(255 173 31);
        bottom: 64px;
        font-size: 1.1rem;
        right: 10px;
        z-index: 9;
    }
</style>