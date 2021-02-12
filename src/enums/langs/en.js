export default {
    HOME : 'Share',
    DISCOVERY : 'Discovery',
    PROFILE : 'Profile',
    CONTRIBUTE : 'Contribute',
    SHARE : 'Share',
    VIEWS : {
        HOME : {
            TITLE : 'Anonymous, Free And Transparent',
            BODY : `
            <p>
                Fox is a browser based p2p(peer to peer) search engine.
                There is no staff group that manage content.
                Users will able to decide which data stay in circulation.
            </p>
            <p>
                In a possible scenario, <b> foxql </b> may only censor on an interface basis, but the data will always remain on the network.
                Other search engines created by the community may continue to present the data in circulation to users.
            </p>
            <p>
                You can vote on what you want people to reach and clone them into your own computer.
            </p>
            `
        },
        SEARCH : {
            PROMISE : 'Load from peers',
            THEN : 'Results for',
        }
    },
    SEARCH_BOX_PLACEHOLDER : 'Search on active peers',
    TRENDS : 'Trends',
    TREND_EMPTY : 'Trend is empty :(',
    FOOTER_TEXT : `All rights are everywhere<br>(c) 2021`,
    STATS : 'Statistics',
    ACTIVE_CONNECTIONS : 'Active Connections',
    NEW_ENTRY_TITLE : 'Title',
    NEW_ENTRY_BODY : 'What do you think?',
    NEW_ENTRY_SUBMIT : 'Share',
    ACTIONS : 'Last actions',
    DOCUMENTATION : 'Documentation',
    NOT_FOUND : {
        TITLE : 'We cannot show this for any of the following reasons.',
        LIST : ` 
            <li> The person sharing this content may not be active at the moment. </li>
            <li> Content may have been shared by a remote user. </li>
            <li> Other users may not have accepted this content because they are uncomfortable with it. </li>
        `,
        FOOTER : 'You can help people by giving information.'
    },
    CENSORED : {
        PERSON : '(Talking about a person) ',
        POLITICIAN : '(Talks about a politician)',
        COMPANY : '(Talks about a company)',
        SEXUAL : '(It talks about a sexual content)',
        INSULT : '(Insulting)',
        POLITICIAL_PARTY : '(Talks about a political party)'
    },
    NOTIFICATION : {
        UPVOTE : 'Cloned into your device',
        DOWNVOTE : 'Document deleted from device'
    },
    INFORMATIONS : [
        {
            type : 'info',
            text : `The shares you voted on are cloned to your device. In this way, posts can reach more people.`
        },
        {
            type : 'success',
            text : `If you vote for censored content, you can view it uncensored in the profile section.`
        }
    ],
    ENTRY_SHARE : {
        COPIE_PROCESS : 'Sharing link is being created',
        COPIE_DONE : 'Share link copied',
        DOCUMENT_CLONED : 'Document saved on your device'
    }
}