<script>
    import {navigate} from 'svelte-routing';
    import {encode} from '../helpers/objectEncoder.js';
    import enums from '../enums/enums.js';

    const navigatePath = 'room/';
   

    function handleOpenModal()
    {
        document.querySelector('.chat-room-form-container').style.display = 'flex';
    }

    function handleCloseModal()
    {
        document.querySelector('.chat-room-form-container').style.display = 'none';
    }
    
    function handleNavigationRoom()
    {
        const title = document.querySelector('input').value;
        if(title.trim() == '') {return false;}

        const roomName = title + new Date().getTime();

        const roomPackage = encode({
            entryTitle : title,
            roomName : roomName
        });

        navigate(navigatePath + roomPackage);
    }

</script>

<style>
    .chat-room-form-container {
        position : fixed;
        left :0px;
        top :0px;
        width :100%;
        height :100%;
        z-index : 23982;
        background : #3e475470;
        display: none;
    }

    .new-form-area {
        width: 40%;
        position: relative;
    }

    input {
        box-sizing: border-box;
        width:100%;
        border-radius: 0px;
        outline: none;
        border: 1px solid #131517;
        border-right: 0px;
        background : transparent;
    }
    .create-btn {
        border-radius: 0px;
        width:25%;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }


    .close-modal-btn {
        position: absolute;
        top : 1rem;
        right : 1rem;
        font-size:1.2rem;
        border:0px;
        background: transparent;
        outline: none;
        cursor: pointer;
    }

    .new-form-area .card-header {
        border-bottom : 1px solid #eee;
    }

    .new-form-area p {
        font-size: 13px;
        color: #555;
        font-weight: normal;
    }

    @media screen and (max-width: 992px) {
        .new-form-area {
            width: 90%;
        }

        .new-form-area .card-header {
            font-size:0.9rem;
        }

        .new-form-area .card-body .btn-text {
            display: none;
        }
    }

</style>


<div class = "chat-room-form-container flex flex f-all-center">
    <div class = "card card-bg-primary rounded-8 new-form-area">
        <div class = "card-header pd-1">
            {enums.CHAT_ROOM.MODAL_TITLE}
        </div>
        <div class = "pd-l-1 pd-b-05 pd-t-05 pd-r-1">
            <p>
                {enums.CHAT_ROOM.MODAL_DESC}
            </p>
        </div>
        <div class = "card-body pd-l-1 pd-b-1 pd-r-1 pd-t-05 flex">
            <input type = "text" placeholder = "Tartışma için bir konu gir" class = "pd-05"/>
            <button class = "btn btn-primary pd-05 create-btn" on:click="{handleNavigationRoom}">
                <span class = "fa fa-plus-square"></span> 
                <span class = "btn-text">{enums.CHAT_ROOM.MODAL_BUTTON}</span>
            </button>
        </div>

        <button class = "close-modal-btn" on:click="{handleCloseModal}"><span class = "fa fa-times-circle"></span></button>
    </div>
</div>


<button class = "btn btn-primary pd-l-1 pd-r-1 pd-t-05 pd-b-05" on:click="{handleOpenModal}">
    <span class = "fa fa-comments"></span>
    {enums.CHAT_ROOM.CREATE_ROOM_BUTTON}
</button>