<script>
    export let document;
    import {link} from 'svelte-routing';
</script>

<div class = "card pd-1 card-bg-primary rounded-8 m-t-1">
    <div class = "card-title pd-b-05">
        <a href = "entry/{document.document.documentId}" use:link>{document.document.title}</a>
    </div>
    <div class = "card-body">
        {document.document.content}
    </div>
</div>