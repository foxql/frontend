<div class = "container">
    <input 
        type = "text" 
        placeholder = "{lang.NAVBAR.SEARCH_INPUT_PLACEHOLDER}"
        on:keydown="{handleKeydown}"
        class = 'search-input'
    />
    <span class = "fa fa-search search-icon"></span>

</div>

<style>

.container {
    display: flex;
    align-items: center;
    width:100%;
    position: relative;
}


.search-icon {
    position: absolute;
    right:10px;
}
 input {
    padding:0.5rem 1rem;
    border-radius: 15px;
    width:100%;
}


</style>


<script>
        import { navigate } from "svelte-routing";
        import lang from '../../utils/lang';
        function handleKeydown(e)
        {
            if(e.key === 'Enter') {
                const query = this.value.trim()
                if(query === '') {
                    return false;
                }
                navigate('search/'+query)
            }
        }
</script>