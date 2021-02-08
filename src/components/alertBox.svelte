<script>
    export let contents;

    let content = contents[Math.floor(Math.random() * contents.length)];

</script>

<style>
    div {
        font-size:0.9rem;
    }
</style>

<div class = "card pd-1 card-bg-{content.type} m-t-1 rounded-8 c-{content.type}">
    {@html content.text}
</div>