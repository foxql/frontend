<script>
    export let doc;
    import utf8 from 'utf8';
    import base64 from 'base-64';
    import enums from '../enums/enums.js';
    import { notifier } from '@beyonk/svelte-notifications';
    const origin = window.document.location.origin + '/shared/';
    const urlShortEndpoint = 'https://tinyurl.com/api-create.php?url=';

    function encodeDocument()
    {
        const bytes = utf8.encode(JSON.stringify(doc));
        return base64.encode(bytes).replace(/\//gi, 'foxql_slash')
    }

    function createInput(encodedString)
    {
        const input = document.createElement('input');
        input.value = encodedString;
        input.style.display.none;

        document.querySelector('.copy-area').appendChild(input)
        
        return input;
    }

    async function shortCopiedUrl(copiedUrl)
    {
        const endpoint = urlShortEndpoint + copiedUrl;
        const request = await fetch(endpoint);
        const shortedUrl = await request.text();
        return shortedUrl;
    }

    async function generateLink()
    {
        notifier.warning(enums.ENTRY_SHARE.COPIE_PROCESS, 1500);

        const encodedPackage = encodeDocument()
        const copiedUrl = origin + encodedPackage;
        const shortedUrl = await shortCopiedUrl(copiedUrl);

        const element = createInput(shortedUrl);
        element.focus();
        element.select();
        document.execCommand('copy');
        notifier.success(enums.ENTRY_SHARE.COPIE_DONE, 1200);
    }
</script>

<style>
    button {
        border:0px;
        outline: none;
        font-size:1.1rem;
        background: transparent;
        cursor: pointer;
        color : #81c392;
    }

    button:hover {
        color : #7289da;
    }

    div {
        position: absolute;
        right:0px;
    }

    .copy-area {
        position: absolute;
        width:1px;
        height:1px;
        overflow: hidden;
    }
</style>

<div class = "copy-area">

</div>

<button on:click="{generateLink}">
    <span class = "fa fa-heart"></span>
</button>