<div class = "box" in:fade>
    <div class = "box-title">
        <span class = "fa fa-globe-europe"></span> {lang.APP.AVATAR}
    </div>
    <div class = "box-content form">
        {#if currentAvatar}
            <input type = "text" value = "{currentAvatar}"/>
        {/if}

        {#if !currentAvatar}
            <input type = "text" placeholder = "Your avatar image url" />
        {/if}
        <button on:click="{handleSave}" data-storagekey = 'node-avatar'> 
            <span class = "fa fa-check"></span>
        </button>
    </div>
</div>

<div class = "box" in:fade>
    <div class = "box-title">
        <span class = "fa fa-globe-europe"></span> {lang.APP.ALIAS}
    </div>
    <div class = "box-content form">
        <input type = "text" value = "{currentAlias}" />
        <button on:click="{handleSave}" data-storagekey = 'node-alias'> 
            <span class = "fa fa-check"></span>
        </button>
    </div>
</div>

<div class = "box" in:fade>
    <div class = "box-title">
        <span class = "fa fa-globe-europe"></span> {lang.APP.EXPLANATION}
    </div>
    <div class = "box-content form">
        <input type = "text" value = "{currentExplanation}" />
        <button on:click="{handleSave}" data-storagekey = 'node-explanation'> 
            <span class = "fa fa-check"></span>
        </button>
    </div>
</div>


<div class = "box" in:fade>
    <div class = "box-title">
        <span class = "fa fa-globe-europe"></span> {lang.NAVBAR.LANGS}
    </div>
    <div class = "box-content wallet-form-container">
        <div on:click="{handleClick}" data-lang = 'tr' class = "lng">
            Türkçe
        </div>
        <div on:click="{handleClick}" data-lang = 'en' class = "lng">
            English
        </div>
    </div>
</div>

<div class = "box" in:fade>
    <div class = "box-title">
       <span class = "fa fa-database"></span> {lang.APP.NODE_STATS}
    </div>
    <div class = "box-content">
        <div class = "stat">
            {lang.APP.DOCUMENT_COUNT}
            <span>{client.database.useCollection('entrys').documentLength}</span>
        </div>
        <div class = "stat">
            {lang.APP.DATA_SIZE}
            <span>{dbSize}</span>
        </div>
        <div class = "stat">
            {lang.APP.COLLECTIONS}
            <span>2</span>
        </div>
        <div class = "stat">
            {lang.APP.CONNECTED_NODES}
            <span>{client.peer.stableConnectionCount()}</span>
        </div>
    </div>
</div>


<div class = "box" in:fade>
    <div class = "box-title">
        <span class = "fa fa-server"></span> Signaling Server
    </div>
    <div class = "box-content">
        <div class = "stat">
            foxql-signal.herokuapp.com
        </div>
    </div>
</div>

<script>
    export let client;
    import { fade } from 'svelte/transition';
    import lang from '../utils/lang';
    import changeLang from '../utils/lang/change.js'

    const currentAvatar = localStorage.getItem('node-avatar') || false;
    const currentAlias = localStorage.getItem('node-alias') || '';
    const currentExplanation = localStorage.getItem('node-explanation') || '';

    function formatBytes(str, decimals = 2) {
        var b = str.match(/[^\x00-\xff]/g);
        const bytes =  (str.length + (!b ? 0: b.length)); 

        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    } 

    let dbSize = formatBytes(JSON.stringify(client.database))

    function handleClick ()
    {
        const target = this.dataset.lang;
        changeLang(target)
    }

    function handleSave()
    {
        const dataset = this.dataset.storagekey;
        const value = this.parentNode.querySelector('input').value;
        localStorage.setItem(dataset, value)
        window.location.href = window.location.href
    }
</script>

<style>
    .box-title {
        font-size : 1rem;
    }

    .stat {
        display: flex;
        padding : 0.5rem 1rem;
        background: rgb(0 0 0 / 20%);
        margin-bottom : 0.4rem;
        align-items: center;
        border-radius: 4px;
    }

    .stat span {
        margin-left :auto;
        font-weight: 600;
        padding : 0.3rem 0.6rem;
        color : #e6bf60;
    }

    .lng {
        padding: 0.3rem 1rem;
        background: #131212;
        cursor: pointer;
        display: inline-block;
        font-size: 0.8rem;
        border-radius: 4px;
    }

    input {
        width: 85%;
        padding: 0.5rem;
        background: rgb(0, 0, 0, 0.3);
        color: #eee;
        border-radius: 4px;
    }

    .form {
        display: flex;
    }

    .form button {
        padding: 0.4rem;
        background: rgb(0, 0, 0, 0.3);
        color: #eee;
        cursor: pointer;
        width: 15%;
        margin-left: 0.4rem;
    }
</style>