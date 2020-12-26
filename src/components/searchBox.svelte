<script>
     import { SearchIcon } from 'svelte-feather-icons'
</script>
<style>
    .search-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .search-box input{
        background:#f6f7f8;
        border:1px solid #ffbc69;
        padding:0.5rem;
        outline: #ccc;
        flex-basis: 90%;
        border-radius: 4px 0px 0px 4px;
        box-sizing: border-box;
    }
    .search-box button{
        background:#ffbc69;
        padding:0.5rem;
        outline: #ddd;
        flex-basis: 10%;
        border-radius: 0px 4px 4px 0px;
        border:0px;
        box-sizing: border-box;
        cursor: pointer;
        color:#555;
    }
</style>
<div class = "card search-box">
    <input type = "text" placeholder = "Özgür, anonim ve sansürsüz internet!"/>
    <button><SearchIcon size="16" /></button>
</div>