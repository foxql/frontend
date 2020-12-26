<script>
    import { EyeIcon, FlagIcon, ArchiveIcon, GithubIcon } from 'svelte-feather-icons'
</script>

<style>
    .widget-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .widget-card {
        flex:1;
        margin-right:20px;
        text-align: center;
    }

    .widget-card:last-child {
        margin-right: 0px;
    }
</style>

<div class = "card">
    <div class = "card-header">
        <h2>Nedir?</h2>
    </div>
    <div class = "card-body">
        <p>
            Tarayıcı üzerinde çalışan eşler arası(p2p) bir arama motorudur. İçerik bazında herhangi bir yönetici kadrosu yoktur.
            Kullanıcılar kendi seçimleriyle dolaşımda kalacak verilerin ne olduğuna karar verir.
        </p>
        <br>
        <p>
            Olası bir senaryoda foxql yalnızca arayüz bazında sansür uygulayabilir, ancak veri her zaman ağ üzerinde bulunmaya devam eder.
            Topluluk tarafında oluşturulmuş diğer arama motorları tarafından her zaman ulaşılmaya devam edilebilir.
        </p>
    </div>
</div>

<div class = "widget-container">

    <div class = "card widget-card">
        <div class = "card-body">
            <EyeIcon size="32" />
        </div>
        <div class = "card-title">
            Anonim
        </div>
    </div>

    <div class = "card widget-card">
        <div class = "card-body">
            <FlagIcon size="32" />
        </div>
        <div class = "card-title">
            Demokratik
        </div>
    </div>
    <div class = "card widget-card">
        <div class = "card-body">
            <ArchiveIcon size="32" />
        </div>
        <div class = "card-title">
            Şeffalık
        </div>
    </div>

    <div class = "card widget-card">
        <div class = "card-body">
            <GithubIcon size="32" />
        </div>
        <div class = "card-title">
            Açık Kaynak
        </div>
    </div>
</div>