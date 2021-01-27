<script>
    import NewEntry from '../components/newEntry.svelte';

    export let client;
</script>


<div class = "card pd-1 card-bg-primary m-t-05 rounded-8">
    <div class = "card-title pd-b-1">
        Anonim, Özgür Ve Şeffaf
    </div>

    <div class = "card-body">
        <p>
            Tarayıcı üzerinde çalışan eşler arası(p2p) bir arama motorudur. İçerik bazında herhangi bir yönetici kadrosu yoktur.
            Kullanıcılar kendi seçimleriyle dolaşımda kalacak verilerin ne olduğuna karar verir.
        </p>
        <p>
            Olası bir senaryoda <b>foxql</b> yalnızca arayüz bazında sansür uygulayabilir, ancak veri her zaman ağ üzerinde bulunmaya devam eder.
            Topluluk tarafında oluşturulmuş diğer arama motorları dolaşımda ki veriyi kullanıcılara sunmaya devam edebilir.
        </p>
    </div>
</div>


<NewEntry client = {client} />