<ProfileBox 
    peerInformation = {peerInformation}
    peerId = {peerId}
    settingShow = {true}
/>


<Rehunts 
    client = {client}
/>


<script>
    export let client;
    import Rehunts from '../components/node/rehuntList.svelte';
    import ProfileBox from '../components/node/profileBox.svelte';

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
