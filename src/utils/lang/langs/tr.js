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
    DOCUMENT_NOT_ADDED : 'Doküman oluşturulamadı'
}

const navbar = {
    SHARE : 'Paylaş',
    NODE : 'Node',
    SEARCH_INPUT_PLACEHOLDER : 'Ne verim abime?',
    LANGS : 'Diller',
    DISCOVERY : 'Rastgele',
    NEWS : 'Olaylar'
}

const infoCards = {
    NOT_FOUND : {
        title : 'Gösterecek bir şey bulamadık. 😢',
        content : 'Muhtemelen sitede şuanda aktif olan kimse yok veya kimse bir şeyler paylaşmıyor...'
    },
    NEWS_NOT_FOUND : {
        title : 'Gösterecek bir şey bulamadık. 😢',
        content : 'Yakın zaman içinde paylaşılan bir şey yok, keşke birileri bir şeyler paylaşsa 🧐'
    }
}

const newEntry = {
    BUTTON : 'Paylaş',
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
    WALLET_ADDRESS_SAVED : 'Cüzdan adresi başarı ile kayıt edildi.'
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

export default {
    LANDING  : landing,
    NOTIFICATION : notification,
    NAVBAR : navbar,
    INFO_CARD : infoCards,
    NEW_ENTRY : newEntry,
    APP : app,
    CENSORED : censored
}