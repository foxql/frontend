<script>
    import NewEntry from '../components/newEntry.svelte';
    import enums from '../enums/enums.js';
    import Header from '../components/header.svelte';
    import AlertBox from '../components/alertBox.svelte';

    export let client;
</script>

<Header content = "{enums.SHARE}"/>

<div class = "pd-l-1 pd-r-1">

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
