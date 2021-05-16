
{#if typeof navigate == 'object'}

    <div class = "title">
        <a href = "entry/{navigate.documentId}/{navigate.entryKey}" use:link>
            {title}
        </a>
    </div>

    {:else} 
    <div class = "title">
        {title}
    </div>
{/if}

<script>
    export let title;
    export let navigate = false;

    import { link } from "svelte-routing"

</script>

<style>
    .title {
        font-size : 1.2rem;
        font-weight : 600;
        padding-bottom: 0.5rem;
    }

    a {
        color : #eee;
    }
    
    
    @media screen and (max-width: 992px) { 

        .title {
            font-size: 1rem;
        }

    }
</style>