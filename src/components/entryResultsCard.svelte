<script>
    export let document
</script>

<style>
    .entry-result {
        background: #f1ebeb5e !important;
    }
    .entry-result .card-header{
        font-family: 'Poppins';
        text-align: left;
        line-height: 1;
        text-transform: none;
    }

    .entry-result .card-body {
        font-size: 0.83rem;
        font-family: 'Open Sans';
    }
</style>

<div class = "card entry-result">
    <div class = "card-header">
        {document.document.title}
    </div>
    <div class = "card-body">
        {document.document.content}
    </div>
</div>