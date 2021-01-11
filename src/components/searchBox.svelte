<script>
    import { navigate } from "svelte-routing";

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
        box-sizing: border-box;
        border:1px solid rgb(235 238 240); 
        border-radius: 12px;
        outline: none;
        background : rgb(235 238 240);
    }
</style>

<div class = "card search-box pd-1">
    <input type = "text" 
        placeholder = "Özgür, anonim ve sansürsüz internet!" 
        class = "pd-05" 
        on:keydown="{handlePress}"
    />
</div>