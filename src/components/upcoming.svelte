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
        background: #000;
        font-family: 'Roboto';
        padding-top:10rem;
    }

    div {
        text-align: center;
        background : #f9f9f9c4;
        color : #000;
        padding:1rem;
        font-weight: 600;
        font-size: 1.2rem;
    }

    input {
        width:100%;
        padding:0.5rem 1rem;
        margin-top: 1rem;
        border:1px solid #eee;
        color : #ccc;
        background: transparent;
        outline: none;
    }

    button {
        width:100%;
        padding : 0.3rem 1rem;
        margin-top:1rem;
        background : #eee;
        border:1px solid #ccc;
        color : #000;
    }


</style>


<div class = "upcoming-area">
    <div class = "title">
        Freedom is coming!
    </div>
    <input type = "text" placeholder = "Your test key"/>
    <button on:click="{handleKey}">Submit</button>
</div>