<div class = "comment" in:fade>
    {content}
</div>

<script>
    export let content;
    import { fade } from 'svelte/transition';
</script>

<style>
    div {
        padding: 0.5rem;
        background: #1312128a;
        font-size: 0.8rem;
        margin-bottom: 0.4rem;
        border-radius: 4px;
    }
</style>