<script>
    import NewEntry from '../components/newEntry.svelte';
    import enums from '../enums/enums.js';

    export let client;
</script>


<div class = "card pd-1 card-bg-primary m-t-05 rounded-8">
    <div class = "card-title pd-b-1">
        {enums.VIEWS.HOME.TITLE}
    </div>

    <div class = "card-body">
        <p>
            {enums.VIEWS.HOME.BODY}
        </p>
    </div>
</div>


<NewEntry client = {client} />