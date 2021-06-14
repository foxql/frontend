<div class = "comment" in:fade>
    <div class = "content">
        {@html contentParser(content)}
    </div>
    <div class = "alias">
        @{sender.information.alias || sender.information.sender}
    </div>
</div>

<script>
    export let content;
    export let sender;
    import { fade } from 'svelte/transition';
    import contentParser from '../../utils/parser/content';
</script>

<style>
    .comment {
        padding: 0.5rem;
        background: #1312128a;
        font-size: 0.8rem;
        margin-bottom: 0.4rem;
        border-radius: 4px;
        position: relative;
    }

    .content {
        width: 100%;
    }
    .alias {
        font-size: 10px;
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
</style>