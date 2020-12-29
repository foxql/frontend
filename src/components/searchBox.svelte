<script>
    import { navigate } from "svelte-routing";
    import { SearchIcon } from 'svelte-feather-icons'

    async function handleSearch()
    {
        const query = document.querySelector('.search-query').value;

        if(query.trim().length <= 0) { return }

        navigate(`search/${query}`, {replace : false });

    }

</script>

<div class = "card search-box">
    <input type = "text" placeholder = "Özgür, anonim ve sansürsüz internet!" class = "search-query"/>
    <button on:click="{handleSearch}"><SearchIcon size="16" /></button>
</div>