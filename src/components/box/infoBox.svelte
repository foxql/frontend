<div class = "box box-danger" in:fade>

    {#if title != undefined}
        <div class = "title">
            <span class = "fa fa-exclamation"></span> {title}
        </div>
    {/if}
    <div class = "content">
        <p>
            {content}
        </p>
    </div>
</div>

<script>
    export let content;
    export let title;

    import { fade } from 'svelte/transition';
</script>