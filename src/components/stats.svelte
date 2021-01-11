<script>
    export let client;

    let activeConnectionLength = 0;

    setInterval(()=> activeConnectionLength = Object.keys(client.peer.connections).length,150)

</script>

<style>
    .stat {
        display: flex;
    }
   .right-span {
        margin-left:auto;
   }
</style>
<div class = "card">
    <div class = "card-title pd-l-1 pd-t-05 pd-b-05">
        İstatistikler
    </div>
    <div class = "card-body">
        <ul>
            <li class = "pd-1 stat">
                <span class = "left-span">Aktif Bağlantı</span> 
                <span class = "right-span">{activeConnectionLength}</span>
            </li>
        </ul>
    </div>
</div>