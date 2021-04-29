<div class = "post" in:fade>
    <div class = "content">
        {xssReplace(content)}
    </div>
    
    {#if commentShowStatus}
    <div class = "comments" in:fade>
        {#if comments.length > 0}
            {#each comments as comment}
                <Comment 
                    content = {comment.content}
                />
            {/each}
        {/if}

        <CommentForm 
            on:newComment = {listenNewComment}
        />
    </div>
    {/if}   

    <ButtonContainer 
        content = {content}
        documentId = {documentId}
        title = {title}
        createDate = {createDate}
        collection = {collection}
        commentsCount = {comments.length}
        commentShowStatus = {commentShowStatus}
        on:commentStatus={listenCommentShowStatus}
    />
</div>

<style>
    .post {
        padding : 0.8rem;
        margin-top : 0.4rem;
        background : rgb(0 0 0 / 35%);
        border-radius: 4px;
    }

    .comments {
        padding: 1rem;
        border: 3px dashed #20212394;
        border-radius: 4px;
        margin-top: 1rem;
        background: #161922;
    }

</style>

<script>
    export let content;
    export let documentId;
    export let title;
    export let createDate;
    export let collection;
    export let entryKey;
    export let comments = [];
    import { fade } from 'svelte/transition';

    let commentShowStatus = false;

    function listenCommentShowStatus(event)
    {
        commentShowStatus = event.detail._status;
    }

    function listenNewComment(event)
    {
        const commentContent = event.detail.content;
        if(commentContent.length <2) {
            return false;
        }

        let commentBody = {
            title : title,
            parentDocumentId : documentId,
            entryKey : entryKey,
            createDate : new Date(),
            content : commentContent
        }

        collection.addDoc(commentBody);

        comments = [...comments, commentBody];
    }


    import ButtonContainer from './buttonContainer.svelte'
    import Comment from './comment.svelte'
    import CommentForm from '../form/newComment.svelte'

    import xssReplace from '../../utils/xss'
</script>