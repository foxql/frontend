<script>
    export let client;
    import Trends from '../components/trends.svelte';

    import MobileCheck from '../helpers/mobileDeviceCheck';
    import Console from '../components/console.svelte';
</script>

{#if MobileCheck()}
    <Console client = {client}/>
{/if}

<div class = "card rounded-8 card-bg-primary m-t-1">
    <Trends client = {client}/>
</div>