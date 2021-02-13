<script>
    export let encodedRoomName;
    export let client;

    import Header from '../components/header.svelte';
    import DocumentButtons from '../components/documentButtons.svelte';
    import enums from '../enums/enums';
    import { afterUpdate } from 'svelte';
    let room;

    let messages = [];

    import {decode} from '../helpers/objectEncoder';

    room = JSON.parse(decode(encodedRoomName));
    
    function downScroll()
    {
        const element = document.querySelector(".messages") || false;
        if(element){
            element.scrollTop =  element.scrollHeight;
        }
        
    }

    client.peer.onPeer(room.roomName, async (data)=>{
        messages = [...messages, client.censored(data)]
    });
    

    function handleInput(e)
    {
        if(e.key == 'Enter'){
            const message = this.value.trim();
            if(message == '' || message.length < 10) {return false;}

            const messageObject = {
                title : room.entryTitle,
                content : message,
                recieveCount : 1
            };

            messages.push(messageObject);

            messages = [...messages]

            client.peer.broadcast({
                listener : room.roomName,
                data : messageObject
            });

            this.value = '';
        }
    }

    $ : {
        if(messages.length > 6) {
            messages.shift();
        }
    }

    afterUpdate(()=>{
        downScroll();
    });

</script>

<style>
    .new-message-box {
        width : 100%;
        box-sizing: border-box;
        border : 1px solid #131517;
        outline: none;
    }

    .new-message-box:focus {
        background : #eee;
        color : #000;
    }

    .send-btn {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        width : 15%;
    }

    .messages {
        height: 70%;
        overflow-y: auto;
    }

    .messages::-webkit-scrollbar {
        width : 0px;
    }

    @media screen and (max-width: 992px) {
        .send-btn .btn-text{
            display: none;
        }

        .messages {
            height: 30%;
        }
    }

</style>

<Header content = {room.entryTitle}/>

<div class = "pd-l-1 pd-r-1 messages">
    {#each messages as message}
            <div class = "card pd-05 rounded-8 card-bg-primary m-t-1">
                <div class = "card-body entry-sub-content flex">
                    <DocumentButtons
                        client = {client}
                        doc = {message}
                        collectionName = 'entrys'
                        hideHeart = {true}
                    />
                    <div class = "content pd-05">
                        {message.content}
                    </div>
                </div>
            </div>
    {/each}
</div>

    <div class = "card pd-1 flex">
        <input type = "text" placeholder = "{enums.CHAT_ROOM.YOUR_MESSAGES}" class = "pd-05 roundend-8 new-message-box rounded-l-t-8 rounded-l-b-8" on:keydown="{handleInput}">
        <button class = "btn btn-primary send-btn" >
            <span class = "fa fa-paper-plane"></span>
            <span class = "btn-text">{enums.CHAT_ROOM.SEND_BUTTON}</span>
        </button>
    </div>