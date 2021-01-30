<script>
    import { navigate } from "svelte-routing";
    import enums from '../enums/enums.js';

    async function handlePress(e)
    {
        if(e.key != 'Enter') return;

        const query = this.value;

        if(query.trim().length <= 0) { return }

        navigate(`search/${query}`, {replace : false });
    }

</script>

<style>
    input {
        width: 100%;
        height:100%;
        background: transparent;
        border:0px;
        outline: none;
    }
    .search-box {
        position: relative;
        margin-top:10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search-box .search-icon {
        position: absolute;
        right:1rem;
        cursor: pointer;
    }
    
    .search-box .search-icon:hover {
        color : #555;
    }

</style>

<div class = "card search-box card-bg-primary rounded-8 pd-t-05 pd-b-05 pd-l-1">
    <input type = "text" 
        placeholder = "{enums.SEARCH_BOX_PLACEHOLDER}" 
        class = "pd-05 rounded-4" 
        on:keydown="{handlePress}"
    />
    <span class = "fa fa-search search-icon"></span>
</div>