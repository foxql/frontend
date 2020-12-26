<script>
    import marked from 'marked';
    async function loadDocumentation() {
        const get = await fetch('https://raw.githubusercontent.com/boraozer/foxql/master/README.md');
        return marked(await get.text());
    }

    const promise = loadDocumentation();
</script>



{#await promise}
    loading...
{:then body}
    {@html body}
{/await}
    