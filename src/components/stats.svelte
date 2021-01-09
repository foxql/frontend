<script>
    export let client;

    let activeConnectionLength = 0;

    setInterval(()=> activeConnectionLength = Object.keys(client.peer.connections).length,150)

</script>

<style>
    .stat-card ul li{
        display: flex;
        padding: 0 !important;
        background : #444;
        color : #eee;
        margin-bottom:5px;
        border:0px;
    }
    .stat-card ul li span{
        box-sizing: border-box;
        padding: 0.4rem;
    }
    .right-span {
        margin-left: auto;
        color : #fff;
        background : #555;
    }
</style>
<div class = "card">
    <div class = "card-header">
        İstatistikler
    </div>
    <div class = "card-body stat-card">
        <ul>
            <li>
                <span class = "left-span">Aktif Bağlantı</span> 
                <span class = "right-span">{activeConnectionLength}</span>
            </li>
        </ul>
    </div>
</div>