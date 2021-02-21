<script>
    import NewEntry from '../components/newEntry.svelte';
    import enums from '../enums/enums.js';
    import Header from '../components/header.svelte';
    import AlertBox from '../components/alertBox.svelte';
    import Meta from '../components/meta.svelte';

    let metadata = {
        title : enums.SHARE
    };

    export let client;
</script>

<Meta {metadata} />

<Header content = "{enums.SHARE}"/>

<div class = "pd-l-1 pd-r-1">
    
    <div class = "card m-t-1 flex f-all-center">
        <a href="https://www.producthunt.com/posts/foxql?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-foxql" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=285394&theme=dark" alt="FoxQL - P2P social network, like twitter. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
    </div>
    <AlertBox contents = {enums.INFORMATIONS}/>

    <div class = "card pd-1 card-bg-primary m-t-05 rounded-8">
        <div class = "card-title pd-b-1">
            {enums.VIEWS.HOME.TITLE}
        </div>

        <div class = "card-body">
            <p>
                {@html enums.VIEWS.HOME.BODY}
            </p>
        </div>
    </div>

    <NewEntry client = {client} />
</div>
