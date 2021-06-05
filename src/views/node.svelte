<div class = "box profile" in:fade>
    <div class = "box-content">
        <div class = "profile-image">
            <img src='{peerInformation.avatar}' alt = "avatar"/>
        </div>
        <div class = "profile-alias">
            <h4>{peerInformation.alias}</h4>
            <p>
                {peerInformation.explanation}
            </p>
            <span class = "peer-id">
                @{peerId}
            </span>
        </div>
    </div>

    <a href = "/settings" class = "settings-link" use:link>
        <span class = "fa fa-cog"></span>
    </a>

</div>


<Rehunts 
    client = {client}
/>


<script>
    export let client;
    import { fade } from 'svelte/transition';
    import { link } from 'svelte-routing';
    import Rehunts from '../components/node/rehuntList.svelte';

    let peerId = null;
    let peerInformation = {
        alias : null,
        avatar : null,
        explanation : 'My node custom object!'
    }

    setTimeout(()=> {
        peerId = client.peer.myPeerId
        peerInformation = client.peer.peerInformation
    }, 150)
</script>

<style>
    .profile .box-content {
        display: flex;
    }

    .profile-image img{
        width: 64px;
        height: 64px;
        border-radius: 300px;
    }

    .profile-alias {
        padding: 0.5rem;
    }

    .profile-alias p {
        font-size: 0.9rem;
    }
    .profile-alias .peer-id {
        font-size: 0.6rem;
        position: absolute;
        right: 10px;
    }

    .settings-link {
        position: absolute;
        color: #eee;
        right:10px;
        top: 10px;
    }
</style>