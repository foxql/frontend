<div class = "content">
    {@html xssReplace(content).replace(/\n/g, "<br />")}
</div>

<div class = "footer">
    <div class = "small-title">
        <a href = "entry/{documentId}/{entryKey}" use:link>
            {title}
        </a>
    </div>
    
</div>

<script>
    export let documentId;
    export let entryKey;
    export let content;
    export let title;

    import xssReplace from '../../utils/xss'
    import {link} from 'svelte-routing'

</script>


<style>
    .content {
        padding-bottom : 1rem;
    }
    .footer .small-title {
        padding: 0.25rem 0.5rem;
        border-radius: 50px;
        font-size: 0.7rem;
        background: rgb(0 0 0 / 30%);
        inline-size: fit-content;
    }

    .footer .small-title a {
        color : #eee;
    }
</style>