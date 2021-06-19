<div class = "box">
    <div class = "box-title">
        <span class = "far fa-bell"></span> {lang.APP.NOTIFICATIONS}
    </div>
    <div class = "box-content">
        <InfoBox 
            {...lang.INFO_CARD.NOTIFICATION_IS_EMPTY}
        />
    </div>
</div>


<script>
    import lang from '../utils/lang'
    import InfoBox from '../components/box/infoBox.svelte'
</script>
