<script>
    import NewEntry from '../components/newEntry.svelte';
    import SearchBox from '../components/searchBox.svelte';

    export let client;
</script>

<SearchBox/>


<div class = "card pd-1">
    <div class = "card-title pd-1">
        Anonim, Özgür Ve Şeffaf
    </div>

    <div class = "card-body pd-l-1">
        <p>
            Tarayıcı üzerinde çalışan eşler arası(p2p) bir arama motorudur. İçerik bazında herhangi bir yönetici kadrosu yoktur.
            Kullanıcılar kendi seçimleriyle dolaşımda kalacak verilerin ne olduğuna karar verir.
        </p>
        <p>
            Olası bir senaryoda foxql yalnızca arayüz bazında sansür uygulayabilir, ancak veri her zaman ağ üzerinde bulunmaya devam eder.
            Topluluk tarafında oluşturulmuş diğer arama motorları tarafından her zaman ulaşılmaya devam edilebilir.
        </p>
    </div>
</div>


<NewEntry client = {client} />