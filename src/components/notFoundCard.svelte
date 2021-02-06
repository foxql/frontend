<script>
    import enums from '../enums/enums.js';
</script>

<style>
    
    .card {
        color : #555;
    }

    .fa-frown {
        font-size:1.5rem;
        position: relative;
    }

    ul {
        list-style: none;
    }

</style>

<div class = "card card-bg-primary rounded-8 m-t-1 pd-1">
    <div class = "card-title pd-05">
        {enums.NOT_FOUND.TITLE}
    </div>
    <div class = "card-body pd-05">
        <ul>
            {@html enums.NOT_FOUND.LIST}
        </ul>
    </div>
    <div class = "card-footer pd-05 flex f-all-center">
        <span class = "fa fa-bomb"></span> {enums.NOT_FOUND.FOOTER}
    </div>
</div>