<script>
    export let data;
    export let client;
    export let hiding;

    import { fade } from 'svelte/transition';
    import { link } from "svelte-routing";

    import BtnContainer from './btnContainer.svelte';

    import xssReplace from '../../utils/xss'

    const document = data.doc;

    const documentId = document.documentId;
    const entryKey = document.entryKey;
</script>

<div class = "box box-primary" in:fade>
        <div class = "box-title">
            <a href = "entry/{documentId}/{entryKey}" use:link>{document.title}</a>
        </div>
    
        <div class = "box-content"> 
           <p>
            {@html xssReplace(document.content).replace(/\n/g, "<br />")}
           </p>
        </div>

        <BtnContainer client = {client} doc = {document} hide = {hiding}/>
</div>
