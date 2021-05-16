{#if activePeerCount <= 0}
    <div class = "overlay">
        <div>
            <h3>Waiting active node</h3>
            <Loading />
            <p>
                Take a few seconds...
            </p>
        </div>
    </div>

{/if}

<style>
    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        left:0px;
        top:0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background : #161922;
        z-index: 999;
        color: #eee;
    }
    p {
        text-align: center;
    }
</style>

<script>
    export let client;
    import Loading from '../box/loading.svelte'
    import { fade } from 'svelte/transition'
    
    let activePeerCount = 0;

    let interval = setInterval(()=>{
        client.peer.socket.emit('call', 10);
        activePeerCount = client.peer.stableConnectionCount()

        if(activePeerCount > 0) {
            clearInterval(interval)
        }
    }, 300)

</script>