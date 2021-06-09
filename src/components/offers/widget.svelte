<div class = "offer-box">
    <a href = "/peer-offers/{peerId}" use:link>
        <div class = "header">
            <img src = "{avatar}" alt = "avatar"/>
            {alias}
            <span>{count}</span>
        </div>
    </a>
</div>

<script>
    export let count;
    export let alias;
    export let avatar;
    export let peerId;

    import { link } from 'svelte-routing';
</script>


<style>
    .offer-box {
        padding: 0.5rem;
    }

    .offer-box a {
        color: #eee;
    }


    .offer-box .header {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        background:#24292e;
        border-radius: 300px;
        padding-right: 1rem;
    }

    .offer-box .header img {
        width: 32px;
        height: 32px;
        border-radius: 100px;
        margin-right:0.4rem
    }

    .offer-box .header span {
        margin-left: auto;
        font-weight: 600;
        color: #ddd;
    }

</style>