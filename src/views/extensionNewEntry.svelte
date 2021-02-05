<script>
    export let client;

    document.querySelector('.left-side').remove();
    document.querySelector('.right-side').remove();
    document.querySelector('.search-box').remove();

    import NewEntry from '../components/newEntry.svelte';
</script>


<NewEntry client = {client}/>