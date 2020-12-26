<script>
    //export let client;
    import Card from '../components/card.svelte';
</script>

<style>
    .search-home-input {
        width: 50%;
        margin-left:25%;
        position: relative;
        margin-top: 15%;
    }
    .search-home-input input{
        width:100%;
        position: relative;
        box-sizing: border-box;
        padding:0.4rem;
        border: 2px solid #ffd369;
        border-radius: 4px;
        outline: none;
    }
    .search-home-input button{
        position: absolute;
        right:0px;
        padding:0rem 1rem;
        height:33px;
        border:0px;
        border-radius: 0px 4px 4px 0px;
        background: #ffd369;
        color:#393e46;
        outline: none;
        cursor: pointer;
    }

    .search-home-input button:hover  {
        background : #ffbc69;
    }
    .search-home-input h2 small{
        font-size : 0.6rem;
        background: #6259ca;
        color:#fff;
        padding : 0.2rem 0.6rem;
        border-radius: 3px;
        top:-3px;
        position: relative;
    }
    .widget-container {
        margin-top: 20px;
        box-sizing: border-box;
    }

</style>

<div class = "pure-1">
    <div class = "search-home-input">
        <h2>
            FoxQL <small>mvp</small>
        </h2>
        <input type = "text" placeholder="Özgür, bağımsız ve sansürsüz!"/>
        <button>
            <i class="gg-search"></i>
        </button>

        <div class = "pure-g widget-container">
                <Card 
                    title = "Gizlilik"
                    content = 'Üyelik gerektirmez ve herhangi bir merkezi yoktur. Takip edilemez!'
                    center = {true}
                />
            
                <Card 
                    title = "Şeffaflık"
                    content = 'Tamamen açık kaynak, her şey göz önünde!'
                    center = {true}
                />
                <Card 
                    title = "Demokratik"
                    content = 'Doğru bilginin insanlara ulaşabilmesi için onları kaydet!'
                    center = {true}
                />
            </div>
    </div>

</div>