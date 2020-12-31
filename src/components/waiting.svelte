<script>
    export let client;

    let activeConnections = 0;
    let requirementConnection = 0;

    let conenctionInterval = setInterval(()=>{
        activeConnections = Object.values(client.peer.connections).length;

        if(activeConnections >= requirementConnection){
            clearInterval(conenctionInterval);
            setTimeout(()=>{
                document.querySelector('.overlay-waiting').remove();
            },300);
           
        }
        
    }, 200);

</script>

<style>

    .overlay-waiting {
        position:fixed;
        left:0px;
        top:0px;
        width:100%;
        height:100%;
        z-index: 5;
        background : #fff;
        display: grid;
        place-items: center;
    }

    .overlay-header {
        font-family: "Poppins",sans-serif;
        text-align: center;
    }

</style>


<div class = "overlay-waiting">
    <div class = "overlay-header">
        <h4>Bağlantı bekleniyor...</h4>
        <p>
            {requirementConnection} / {activeConnections}
        </p>
        
    </div>
</div>