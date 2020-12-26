<script>
    import marked from 'marked';
    async function loadDocumentation() {
        const get = await fetch('https://raw.githubusercontent.com/boraozer/foxql/master/README.md');
        return marked(await get.text());
    }

    const promise = loadDocumentation();
</script>

<style>
    .content-document {
        position: relative;
        width:50%;
        margin-left:25%;
    }
</style>

<div class = "content-document">
{#await promise}
    loading...
{:then body}
    {@html body}
{/await}
</div>