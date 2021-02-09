export default {
    HOME : 'Paylaş',
    DISCOVERY : 'Keşfet',
    PROFILE : 'Profil',
    CONTRIBUTE : 'Katkıda Bulun',
    SHARE : 'Paylaş',
    VIEWS : {
        HOME : {
            TITLE : 'Anonim, Özgür Ve Şeffaf',
            BODY : `
            <p>
                Tarayıcı üzerinde çalışan eşler arası(p2p) bir arama motorudur.
                İçerik bazında herhangi bir yönetici kadrosu yoktur.
                Kullanıcılar kendi seçimleriyle dolaşımda kalacak verilerin ne olduğuna karar verir.
            </p>
            <p>
                Olası bir senaryoda <b>foxql</b> yalnızca arayüz bazında sansür uygulayabilir, ancak veri her zaman ağ üzerinde bulunmaya devam eder.
                Topluluk tarafında oluşturulmuş diğer arama motorları dolaşımda ki veriyi kullanıcılara sunmaya devam edebilir.
            </p>
            <p>
                İnsanlara ulaşmasını istediğiniz şeyleri oylayarak kendi bilgisayarına klonlayabilirsin.
            </p>
            `
        },
        SEARCH : {
            PROMISE : 'Sorgulanıyor..',
            THEN : 'Sonuçlandı',
        }
    },
    SEARCH_BOX_PLACEHOLDER : 'Özgür, anonim ve sansürsüz internet!',
    TRENDS : 'Gündem',
    TREND_EMPTY : 'Gündem boş :(',
    FOOTER_TEXT : `Tüm hakları her yerdedir.<br>(c) 2021`,
    STATS : 'İstatistikler',
    ACTIVE_CONNECTIONS : 'Aktif Bağlantı',
    NEW_ENTRY_TITLE : 'Başlık',
    NEW_ENTRY_BODY : 'Neler oluyor?',
    NEW_ENTRY_SUBMIT : 'Paylaş',
    ACTIONS : 'Son hareketler',
    DOCUMENTATION : 'Dokümantasyon',
    NOT_FOUND : {
        TITLE : 'Aşağıda ki nedenlerden herhangi biri yüzünden, bunu gösteremiyoruz.',
        LIST : ` 
            <li>Bu içeriği paylaşan kişi şuan aktif olmayabilir.</li>
            <li>İçerik size çok uzak bir kullanıcı tarafından paylaşılmış olabilir.</li>
            <li>Diğer kullanıcılar bu içerikten rahatsız oldukları için sahiplenmeyi kabul etmemiş olabilirler.</li>
        `,
        FOOTER : 'Bilgi vererek insanlara yardımcı olabilirsin.'
    },
    CENSORED : {
        PERSON : '(Bir kişiden bahsediyor) ',
        POLITICIAN : '(Bir politikacıdan bahsediyor)',
        COMPANY : '(Bir şirketten bahsediyor)',
        SEXUAL : '(Cinsel bir içerikten bahsediyor)',
        INSULT : '(Argo konuşuyor)',
        POLITICIAL_PARTY : '(Siyasi bir oluşum)'
    },
    NOTIFICATION : {
        UPVOTE : 'Cihazınıza klonlandı.',
        DOWNVOTE : 'Cihazdan kaldırıldı'
    },
    INFORMATIONS : [
        {
            type : 'info',
            text : `Oyladığın paylaşımlar cihazına klonlanır. Bu şekilde paylaşımlar daha fazla insana ulaşabilir.`
        },
        {
            type : 'success',
            text : `Sansürlü içeriklere oy verirsen profil kısmında sansürsüz olarak görüntüleyebilirsin.`
        }
    ]
}