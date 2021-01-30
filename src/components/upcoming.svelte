<script>
    function handleKey()
    {
        const key = document.querySelector('input').value;
        localStorage.setItem('token', key);
        window.location.href = window.location.href;
    }
</script>

<style>
    .upcoming-area {
        position:fixed;
        left:0px;
        top:0px;
        width:100%;
        height:100%;
        z-index: 2938;
        background: #fff;
        font-family: 'Roboto';
        padding-top:10rem;
        padding : 10rem;
    }

    .title {
        color : #000;
        font-weight: 600;
        font-size: 1.2rem;
    }

    .mikmik {
        display: flex;
    }

    input {
        width:100%;
        padding:0.5rem 1rem;
        margin-top: 1rem;
        border:1px solid #eee;
        color : #555;
        background: transparent;
        outline: none;
    }

    button {
        width:10%;
        padding : 0.3rem 1rem;
        margin-top:1rem;
        background : #eee;
        border:1px solid #ccc;
        color : #000;
    }


</style>


<div class = "upcoming-area">
    <div class = "title">
        Have a test key?
    </div>
    <div class = "mikmik">
        <input type = "text" placeholder = "Your test key"/>
        <button on:click="{handleKey}">Submit</button>
    </div>
    
</div>