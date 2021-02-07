<script>
    export let client;
    import Trends from '../components/trends.svelte';

    import MobileCheck from '../helpers/mobileDeviceCheck';
    import Console from '../components/console.svelte';

    import Header from '../components/header.svelte';
    import enums from '../enums/enums.js';
</script>

<Header content = "{enums.TRENDS}"/>

<div class = "pd-l-1 pd-r-1">
    {#if MobileCheck()}
        <Console client = {client}/>
    {/if}

    <div class = "card rounded-8 card-bg-primary m-t-1">
        <Trends client = {client}/>
    </div>
</div>