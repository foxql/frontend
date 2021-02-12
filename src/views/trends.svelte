<script>
    export let client;
    import Trends from '../components/trends.svelte';

    import MobileCheck from '../helpers/mobileDeviceCheck';
    import Console from '../components/console.svelte';

    import Header from '../components/header.svelte';
    import enums from '../enums/enums.js';

    import Meta from '../components/meta.svelte';

    let metadata = {
        title : enums.TRENDS,
        description : enums.TRENDS_DESCRIPTION
    };

</script>

<Meta {metadata} />

<Header content = "{enums.TRENDS}"/>

<div class = "pd-l-1 pd-r-1">
    {#if MobileCheck()}
        <Console client = {client}/>
    {/if}

    <div class = "card rounded-8 card-bg-primary m-t-1">
        <Trends client = {client}/>
    </div>
</div>