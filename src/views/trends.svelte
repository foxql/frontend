<script>
    export let client;
    import Trends from '../components/trends.svelte';
    import Console from '../components/console.svelte';
</script>

<div class = "card rounded-8 card-bg-primary m-t-1">
    <Trends client = {client}/>
</div>

<div class = "card rounded-8 card-bg-primary m-t-1">
    <Console client = {client}/>
</div>