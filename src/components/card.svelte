<script>
    export let title;
    export let center;
    export let content;
</script>
<style>
    .card-container {
        box-sizing: border-box;
        margin-bottom:0.5rem;
        padding:0.5rem;
    }
    .card {
        background: #f2f2f2;
        border-radius: 3px;
        padding:1rem;
        box-sizing: border-box;
        min-height:150px;
        box-shadow: 1px 1px 1px #ddd;
    }

    .card-header {
        font-size:1rem;
        padding: 1rem 0rem 1rem 0rem;
        font-weight: 600;
    }

    .card-body {
        font-size : 0.8rem;
    }

    .center {
        text-align: center;
    }
</style>

<div class = "pure-u-3 pure-u-md-1-3 card-container {center !== undefined ? 'center' : ''}">
    <div class = "card">

        {#if title !== undefined} 
            <div class = "card-header">
               {title}
            </div>
        {/if}

        <div class = "card-body">
            {content ||  ''}
        </div>
    </div>
</div>