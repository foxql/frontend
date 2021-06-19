<div class = "entry" in:fade>
    <slot name = "header"></slot>
    <slot name = "posts"></slot>
    <slot name = "abstract"></slot>
</div>


<style>
    .entry {
        color : #ccc;
        background: rgb(0 0 0 / 30%);
        padding : 1rem;
        border-radius : 4px;
        margin-bottom : 1rem;
        position: relative;
        word-break: break-word;
        border-right: 4px solid rgb(0 0 0 / 30%);
        border-bottom: 3.5px solid rgb(0 0 0 / 30%);
    }

    @media screen and (max-width: 992px) {
        .entry {
            border-radius: 0px;
            border-bottom: 0px;
            border-right: 0px;
        }
    }

</style>

<script>
    import { fade } from 'svelte/transition';
</script>