{#if !close && agent.indexOf('android') > -1}
    <a href='https://play.google.com/store/apps/details?id=com.foxql.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
        <div class = "container">
            <div class = "side">
               {lang.APP.DOWNLOAD_PLAY_STORE}
            </div>
            <div class = "side">
                <img alt='Get it on Google Play' src='./assets/play-store.svg'>
            </div>

            <button on:click="{handleClick}">
                <span class = "fa fa-times"></span>
            </button>
        </div>
    </a>
{/if}

<script>    
    let close = localStorage.getItem('clicked-google-play-widget') || false;
    let agent = navigator.userAgent.toLowerCase() || '';
    import lang from '../../utils/lang';

    console.log(agent)

    function handleClick()
    {
        localStorage.setItem('clicked-google-play-widget', '1')
        close  = true;
    }
</script>


<style>
    .container {
        display: flex;
        padding: 1rem;
        background: rgb(0 0 0 / 30%);
        border-radius: 8px;
        color: #eee;
        font-size: 0.9rem;
        align-items: center;
        margin-bottom: 1rem;
    }

    .side img {
        width: 100px;
    }

    .side {
        margin-right: 1rem;
    }

    @media screen and (min-width: 992px) {
        .container {
            display: none;
        }
    }

    @media screen and (max-width: 992px) { 
        .container {
            border-radius: 0px;
        }
    }

    button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        padding: 0.3rem;
        border-radius: 100px;
    }
</style>