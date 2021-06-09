<div class = "box">
    <div class = "box-title">
        <span class="fa fa-fist-raised"></span> Son teklifler
    </div>
    <div class = "box-content">

        {#each offerPeerList as peer}
            <OfferWidget 
                alias = {peer.information.alias}
                avatar = {peer.information.avatar}
                count = {peer.count}
                peerId = {peer.information.sender}
            />
        {/each}

    </div>
</div>

<script>
    import { init,  onOffer} from '../../stores/offeredDocuments';
    import OfferWidget from '../offers/widget.svelte';

    let offerPeerList = [];


    async function handleOfferList(data)
    {
        console.log(data)
        offerPeerList = Object.values(data)
    }   

    onOffer(handleOfferList)
    init();
</script>
