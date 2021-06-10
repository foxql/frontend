<div class = "box">
    <div class = "box-title">
        <span class="fa fa-fist-raised"></span> {lang.NAVBAR.OFFERS}
    </div>
    <div class = "box-content">

        {#if offerPeerList.length > 0}
            {#each offerPeerList as peer}
                <OfferWidget 
                    alias = {peer.information.alias}
                    avatar = {peer.information.avatar}
                    count = {peer.count}
                    peerId = {peer.information.sender}
                />
            {/each}
        {/if}

        {#if offerPeerList.length == 0}
            <InfoBox 
                {...lang.INFO_CARD.NOT_FOUND_OFFERED_DOC}
            />
        {/if}

    </div>
</div>

<script>
    import lang from '../../utils/lang';
    import { init,  onOffer} from '../../stores/offeredDocuments';
    import OfferWidget from '../offers/widget.svelte';
    import InfoBox from '../box/infoBox.svelte';

    let offerPeerList = [];


    async function handleOfferList(data)
    {
        offerPeerList = Object.values(data)
    }   

    onOffer(handleOfferList)
    init();
</script>
