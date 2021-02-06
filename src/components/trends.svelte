<script>
    export let client;
    import {link} from 'svelte-routing';
    import enums from '../enums/enums.js';

    const countryList = {
        tr : 'turkey',
        usa : 'united-states' 
    };

    let targetCountry = localStorage.getItem('country') || false;

    if(!targetCountry) {
        localStorage.setItem('country', 'usa')
        targetCountry = 'usa';
    }

    const countryName = countryList[targetCountry];

    let trendList = [];

    client.peer.socket.on('getTrends', (list)=>{
        trendList = list;
    })

    client.peer.socket.emit('getTrends', countryName)

    function changeCountry()
    {
        const currentCountry = localStorage.getItem('country') || 'usa';
        if(currentCountry == 'usa') {
            localStorage.setItem('country', 'tr')
        }else{
            localStorage.setItem('country', 'usa')
        }

        window.document.location.href = window.document.location.href
    }
</script>

<style>
.card {
    margin-bottom: 10px;
    background : rgb(247 249 250);
    border:0px;
    border-radius: 10px;
    margin-top:10px;
}

.card .card-title {
    font-size:16px;
    border-bottom: 1px solid #eee;
}

.country-select-btn:hover {
    cursor: pointer;
    color : #6625bd;
    transition: color ease 0.2s;
}
.upper {
    text-transform: uppercase;
}
</style>

<div class = "card">
    <div class = "card-title pd-l-1 pd-t-05 pd-b-05 flex">
        <div>
            {enums.TRENDS} (twitter.com)
            <span class = "fa fa-fire"></span>
        </div>
        <div class = "f-right m-r-1 country-select-btn" on:click="{changeCountry}">
            <span class = "upper">{targetCountry}</span>
            <span class = "fa fa-angle-double-down"></span>
        </div>
    </div>
    <div class = "card-body">
        <ul>
            {#if trendList.length <= 0} 
                    <li class = "pd-1">
                        {enums.TREND_EMPTY}
                    </li>
            {:else}

            {#each trendList as term}
                    
                <li class = "pd-1">
                   <a href = "search/{term}" use:link replace>{term}</a>
                </li>

            {/each}

            {/if}
        </ul>
    </div>
</div>