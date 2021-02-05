<script>
    export let client;

    document.querySelector('.left-side').remove();
    document.querySelector('.right-side').remove();
    document.querySelector('.search-box').remove();

    import NewEntry from '../components/newEntry.svelte';
</script>

<style>
    body {
        background : transparent !important;
    }
</style>

<NewEntry client = {client}/>