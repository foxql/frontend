<div class = "box" in:fade>
    <div class = "box-content flex">
        <div class = "side img-container">
            <img src = "./assets/freedom.svg">
        </div>

        <div class = "side pull-right">
            <p>
               {@html lang.HOME.FREEDOM}
            </p>
        </div>
    </div>
</div>

<div class = "box box-danger" in:fade>
    <span class="fa fa-heart"></span> {lang.HOME.LOVE} 
</div>

<div class = "box" in:fade>
    <div class = "box-content flex">

        <div class = "side">
            <p>
               {@html lang.HOME.DATA}
            </p>
        </div>

        <div class = "side img-container pull-right">
            <img src = "./assets/database.svg">
        </div>
    </div>
</div>

<div class = "box" in:fade>
    <div class = "box-content flex">
        <div class = "side img-container">
            <img src = "./assets/open_source.svg">
        </div>

        <div class = "side">
            <p>
               {@html lang.HOME.OPEN_SOURCE}
            </p>
            <p>
                <a href = "https://github.com/foxql" class = "github">Github</a>
            </p>
        </div>
    </div>
</div>

<script>
    import { fade } from 'svelte/transition'
    import lang from '../utils/lang'
</script>


<style>
    .flex {
        display: flex;
        align-items: center;
    }

    .flex .side {
        width: 50%;
        margin-left: 1rem;
    }

    .side p {
        text-align: center;
        margin-bottom:0.5rem;
    }

    .flex .side .img-container {
        padding : 0.5rem;
        align-items: center;
    }

    .side img{
        width: 70%;
    }

    .side:last-child {
        margin-left: auto;
    }

    .pull-right {
        display: flex;
    }

    .pull-right img, .pull-right p {
        margin-left: auto;
    }

    .github {
        padding: 0.3rem 0.8rem;
        border-radius: 8px;
        background: #24292e;
        color: #f6f8fa;
        margin-top: 1rem;
    }
</style>