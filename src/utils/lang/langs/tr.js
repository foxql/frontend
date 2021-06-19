const landing = {
    BIG_TITLE : 'Özgür Şeffaf Demokratik',
    RIGHT_PARAGRAPH : `Üyelik yok, takip yok, influencer yok. Sadece içerik var. Devrimsel bir sosyal ağ deneyimi!`,
    DOCUMENT_TITLE : 'Merhaba',
    TEXTAREA_PLACEHOLDER : 'Merhaba başlığı için bir şeyler paylaş ve bir foxql kullanıcısı ol!',
    FORM_BUTTON : 'Giriş yap',
    WHITEPAPER_ALERT : 'Hazırlığımız henüz tamamlanmadı, pek yakında yayınlanmış olacak.'
}

const notification  = {
    MIN_CONTENT_LENGTH : 'En az 1 karakter girmelisiniz.',
    DOCUMENT_ADDED : 'Doküman başarı ile oluşturuldu',
    REDIRECT : 'Yönlendiriliyorsunuz...',
    DOCUMENT_NOT_ADDED : 'Doküman oluşturulamadı',
    TRENDS_REFRESH : 'Gündem listesi yeniden hesaplandı'
}

const navbar = {
    SHARE : 'Paylaş',
    NODE : 'Profil',
    SEARCH_INPUT_PLACEHOLDER : 'Ne verim abime?',
    LANGS : 'Diller',
    DISCOVERY : 'Rastgele',
    NEWS : 'Olaylar',
    TRENDS : 'Gündem',
    OFFERS : 'Teklifler'
}

const infoCards = {
    NOT_FOUND : {
        title : 'Gösterecek bir şey bulamadık. 😢',
        content : 'Muhtemelen sitede şuanda aktif olan kimse yok veya kimse bir şeyler paylaşmıyor...'
    },
    NEWS_NOT_FOUND : {
        title : 'Gösterecek bir şey bulamadık. 😢',
        content : 'Yakın zaman içinde paylaşılan bir şey yok, keşke birileri bir şeyler paylaşsa 🧐'
    },
    TRENDS_EMPTY : {
        title : 'Trend listesi şuan boş 😭',
        content : 'Bir şeyler paylaşarak bu listenin dolmasını sağlayabilirsin 🙏'
    },
    OFFERS : {
        content : `Daha fazla insana ulaşmasını istediğin şeyleri beğenerek foxql ağını koruyabilirsin. 😍`
    },
    ZERO_OFFERS : {
        content : `Şuanda ağa teklif edilen bir içerik yok. 🤯`
    },
    NOT_FOUND_OFFERED_DOC : {
        content : 'Onay bekleyen bir içerik teklifi yok. 😒'
    },
    NOTIFICATION_IS_EMPTY : {
        title : 'Tespit edebildiğimiz bir bildirim yok 😭',
        content : 'Bir şeyler paylaşırsan, insanlar seni fark edebilir 🤩'
    }
}

const newEntry = {
    BUTTON : 'Hunt',
    TITLE : 'Konu başlığı',
    PLACEHOLDER : 'Ne düşünüyorsun?'
}

const app = {
    NODE_STATS : 'Düğüm istatistikleri',
    DOCUMENT_COUNT : 'Doküman sayısı',
    DATA_SIZE : 'Veritabanı boyutu',
    COLLECTIONS : 'Koleksiyonlar',
    CONNECTED_NODES : 'Bağlanılan düğümler',
    DOCUMENTS : 'Dokümanlar',
    RESULTS : 'Sonuç',
    SEARCH_PROMISE : 'Cevap bekliyor...',
    CACHED_NEW_ENTRYS : 'Yeni içerikler klonlandı ve dağıtım için hazırlandı.',
    TITLE_MIN_LENGTH : 'Başlık en az 2 karakter olmalı',
    CONTENT_MIN_LENGTH : 'İçerik en az 1 karakter olmalı',
    CONTENT_ADDED : 'İçerik paylaşıldı ve klonlandı.',
    CONTENT_NOT_ADDED : 'İçerik paylaşılamadı.',
    NEXT : 'İleri',
    PREV : 'Geri',
    WALLET_ADDRESS : 'Cüzdan Adresi',
    WALLET_ADDRESS_PLACEHOLDER : 'Tron ağında geçerli bir cüzdan adresi.',
    WALLET_ADDRESS_SAVED : 'Cüzdan adresi başarı ile kayıt edildi.',
    TRENDS : 'Gündem',
    SHOW_MORE : 'Devamını Göster',
    DOWNLOAD_PLAY_STORE : 'Android uygulamamızı indirerek bize daha kolay ulaşabilirsin 🥰',
    ALIAS : 'Takma ad',
    AVATAR : 'Profil fotoğrafı',
    EXPLANATION : 'Hakkımda',
    NOTIFICATIONS : 'Bildirimler'
}

const censored = {
    PERSON : '(Bir kişiden bahsediyor) ',
    POLITICIAN : '(Bir politikacıdan bahsediyor)',
    COMPANY : '(Bir şirketten bahsediyor)',
    SEXUAL : '(Cinsel bir içerikten bahsediyor)',
    INSULT : '(Argo konuşuyor)',
    POLITICIAL_PARTY : '(Siyasi bir oluşum)',
    RACISM : "(Irkçılık yapılıyor olabilir)"
};

const home = {
    FREEDOM : `Paylaşırken korkma, içeriklerin getirdiği <b>sorumlulukları</b> tüm topluluk üstlenir 🥰`,
    DATA : `Veriler sunucularda değil <b>Kullanıcılarda</b> depolanır 🥳`,
    OPEN_SOURCE : `Tamamen açık kaynak 👨‍💻`,
    LOVE : `İçerikleri beğenerek kendine klonla bu şekilde yönetime katkıda bulunmuş olursun`
}

export default {
    LANDING  : landing,
    NOTIFICATION : notification,
    NAVBAR : navbar,
    INFO_CARD : infoCards,
    NEW_ENTRY : newEntry,
    APP : app,
    CENSORED : censored,
    HOME : home
}