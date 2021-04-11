<div class = "box" in:fade>
    <div class = "box-title">
        {lang.APP.WALLET_ADDRESS}
    </div>
    <div class = "box-content wallet-form-container">
        <input 
            type = "text" 
            placeholder = "{lang.APP.WALLET_ADDRESS_PLACEHOLDER}" 
            value = "{localStorage.getItem('fql-wallet-address') || ''}"
            class = "wallet-address-input"/>
        <button class = "wallet-save-btn" on:click="{handleSaveWalletAddress}">
            <i class = "fa fa-check"></i>
        </button>
    </div>
</div>

<div class = "box" in:fade>
    <div class = "box-title">
        {lang.APP.NODE_STATS}
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
            <span>1</span>
        </div>
        <div class = "stat">
            {lang.APP.CONNECTED_NODES}
            <span>{client.peer.stableConnectionCount()}</span>
        </div>
    </div>
</div>

<div class = "box" in:fade>
    <div class = "box-title">
        {lang.APP.DOCUMENTS}
    </div>
    <div class = "box-content">
        {#each showingDocuments as doc}
        <div class = "box box-primary" in:fade>
            <div class = "box-title">
                <a href = "entry/{doc.documentId}/{doc.entryKey}" use:link>{doc.title}</a>
            </div>

            <div class = "box-content"> 
                <p>
                    {doc.content}
                </p>
            </div>

            <BtnContainer client = {client} doc = {doc} hide = {true}/>
        </div>

        {/each}
    </div>
</div>

<div class = "button-group">
    <button class = "prev" on:click="{handlePrev}" in:fade>
        <span class = "fa fa-angle-left"></span> {lang.APP.PREV}
    </button>
    <button class = "next" on:click="{handleNext}" in:fade>
        {lang.APP.NEXT} <span class = "fa fa-angle-right"></span>
    </button>
</div>

<script>
    export let client;
    import { fade } from 'svelte/transition';
    import { link } from "svelte-routing";
    import lang from '../utils/lang';
    import BtnContainer from '../components/box/btnContainer.svelte';
    import {notifier} from '@beyonk/svelte-notifications'

    let perPage = 5;
    let offset = 0;

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

    let allDocuments = Object.values(client.database.useCollection('entrys').documents);
    let showingDocuments = allDocuments.slice(0, perPage);
    let documentLength = allDocuments.length;

    function changeView()
    {
        showingDocuments = allDocuments.slice(offset, offset + perPage);
    }

    function handleNext()
    {
        if( (offset + perPage) > documentLength){
            return false;
        }

        offset += perPage;

        changeView();
    }

    function handlePrev()
    {
        if(offset <= 0){
            return false;
        }

        offset -= perPage;
        
        changeView();
    }


    function handleSaveWalletAddress()
    {
        const address = document.querySelector('.wallet-address-input').value;
        if(address.trim().length > 0) {
            localStorage.setItem('fql-wallet-address', address.trim())
            notifier.success(lang.APP.WALLET_ADDRESS_SAVED, 1200)
        }
    }

</script>

<style>
    .box-title {
        font-size : 1rem;
    }

   .stat {
       display: flex;
       padding : 0.5rem 1rem;
       background: #1619226b;
       margin-bottom : 0.4rem;
       align-items: center;
   }

   .stat span {
       margin-left :auto;
       font-weight: 600;
       padding : 0.3rem 0.6rem;
       color : #e6bf60;
   }

   .button-group {
        display: flex;
        width:100%;
        padding : 0.4rem;
   }

   .button-group .next {
        margin-left:auto;
        border-bottom: 2px solid #981f1f;
        border-right: 2px solid #981f1f;
   }

   .button-group .prev {
        border-bottom: 2px solid #981f1f;
        border-left: 2px solid #981f1f;
   }

   .button-group button {
        padding: 0.4rem 1rem;
        border-radius: 4px;
        background: #161922;
        color: #eee;
        cursor: pointer;
   }

   .wallet-form-container {
       display:flex;
   }

   .wallet-address-input {
       width: 90%;
       padding:0.4rem 1rem;
       border-top-left-radius: 8px;
       border-bottom-left-radius: 8px;
       background : #ccc;
       color : #555;
   }


   .wallet-save-btn {
        width : 10%;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background : #393e46;
        color: #eee;
        cursor: pointer;
   }


   @media screen and (max-width: 992px) {
        .wallet-save-btn {
            width : 20%;
        }

        .wallet-address-input {
            width: 80%;
        }
   }
</style>