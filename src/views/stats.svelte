<div class = "box" in:fade>
    <div class = "box-title">
        FoxQL - Stats
    </div>
    <div class = "box-content">
        <iframe width="600" height="800" src="{dataStudioUrl}" frameborder="0" style="border:0" title = "FoxQL | Stats"></iframe>
    </div>
</div>


<style>
    iframe {
        width: 100%;
        min-height:600px;
    }
</style>

<script>
    import { fade } from 'svelte/transition';

    const dataStudioUrl = 'https://datastudio.google.com/reporting/27d2531a-19d0-4134-8fc5-7beda70b3bb9';
</script>