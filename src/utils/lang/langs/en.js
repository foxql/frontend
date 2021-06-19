const landing = {
    BIG_TITLE : 'Free Transparent Democratic',
    RIGHT_PARAGRAPH : `No membership, no tracking, no influencer. There is only content. A revolutionary social networking experience!`,
    DOCUMENT_TITLE : 'Hello',
    TEXTAREA_PLACEHOLDER : 'Share something for the hello header and become a foxql user!',
    FORM_BUTTON : 'Login',
    WHITEPAPER_ALERT : 'Our preparation is not complete yet, it will be published soon.'
}

const notification  = {
    MIN_CONTENT_LENGTH : 'You must enter at least 2 characters.',
    DOCUMENT_ADDED : 'Document successfully created',
    REDIRECT : 'Redirecting...',
    DOCUMENT_NOT_ADDED : 'Doküman oluşturulamadı',
    TRENDS_REFRESH : 'Trend list refreshed'
}

const navbar = {
    SHARE : 'Share',
    NODE : 'Profile',
    SEARCH_INPUT_PLACEHOLDER : 'Search any content!',
    LANGS : 'Languages',
    DISCOVERY : 'Discovery',
    NEWS : 'Events',
    TRENDS : 'Trends',
    OFFERS : 'Offers'
}

const infoCards = {
    NOT_FOUND : {
        title : "We couldn't find anything to show. 😢",
        content : 'Probably nobody is active on the site right now or nobody posts anything ...'
    },
    NEWS_NOT_FOUND : {
        title : "We couldn't find anything to show. 😢",
        content : 'Nothing shared recently, I wish someone shared something 🧐'
    },
    TRENDS_EMPTY : {
        title : 'Trend list is empty now 😭',
        content : 'You can fill this list by sharing something 🙏'
    },
    OFFERS : {
        title : null,
        content : 'You can protect your foxql network by liking what you want to reach more people. 😍'
    },
    ZERO_OFFERS : {
        content : `There is currently no content offered to the network. 🤯`
    },
    NOT_FOUND_OFFERED_DOC : {
        content : 'No content offers pending approval. 😒'
    },
    NOTIFICATION_IS_EMPTY : {
        title : 'No notification we can detect 😭',
        content : 'If you share something, people might notice you. 🤩'
    }
}

const newEntry = {
    BUTTON : 'Hunt',
    TITLE : 'Topic title',
    PLACEHOLDER : 'What do you think?'
}

const app = {
    NODE_STATS : 'Node statistics',
    DOCUMENT_COUNT : 'Document count',
    DATA_SIZE : 'Database size',
    COLLECTIONS : 'Collections',
    CONNECTED_NODES : 'Connected Nodes',
    DOCUMENTS : 'Documents',
    RESULTS : 'Results',
    SEARCH_PROMISE : 'Running...',
    CACHED_NEW_ENTRYS : 'New content has been cloned and prepared for distribution.',
    TITLE_MIN_LENGTH : 'Title must be at least 2 characters',
    CONTENT_MIN_LENGTH : 'Content must be at least 1 characters',
    CONTENT_ADDED : 'Content shared and cloned.',
    CONTENT_NOT_ADDED : 'Content could not be shared.',
    NEXT : 'Next',
    PREV : 'Prev',
    WALLET_ADDRESS : 'Wallet Address',
    WALLET_ADDRESS_PLACEHOLDER : 'A valid wallet address in the Tron network.',
    WALLET_ADDRESS_SAVED : 'The wallet address has been successfully registered.',
    TRENDS : 'Trends',
    SHOW_MORE : 'Show More',
    DOWNLOAD_PLAY_STORE : 'Get it on google play 🥰',
    ALIAS : 'Avatar',
    AVATAR : 'Avatar',
    EXPLANATION : 'Explanation'
}

const censored = {
    PERSON : '(Talking about a person) ',
    POLITICIAN : '(Talks about a politician)',
    COMPANY : '(Talks about a company)',
    SEXUAL : '(It talks about a sexual content)',
    INSULT : '(Insulting)',
    POLITICIAL_PARTY : '(Talks about a political party)',
    RACISM : "(There may be racism)"
};

const home = {
    FREEDOM : `Don't be afraid when sharing, the whole community takes on the <b> responsibilities </b> of the content 🥰`,
    DATA : `Data is stored on <b> Users </b>, not servers 🥳`,
    OPEN_SOURCE : `Fully open source 👨‍💻`,
    LOVE : `By liking the content, you can clone yourself and contribute to the management.`
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