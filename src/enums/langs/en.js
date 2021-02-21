export default {
    HOME : 'Share',
    DISCOVERY : 'Discovery',
    PROFILE : 'Profile',
    CONTRIBUTE : 'Contribute',
    SHARE : 'Share',
    VIEWS : {
        HOME : {
            TITLE : 'Free And Transparent',
            BODY : `
            <p>
                FoxQL is a social network that runs on your browser as peer to peer. It does not require any setup or registration
            </p>
            <p>
                There is no magement stuff for checking the content. Users can decide which topics and content will stay in foxql cycle
            </p>
            <p>
                Decide the content that you would like to share with people. Then just clone the content via voting. That's all!
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
        POLITICIAL_PARTY : '(Talks about a political party)',
        RACISM : "(There may be racism)"
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
            text : `You can use the heart button to share the content you liked.`
        }
    ],
    ENTRY_SHARE : {
        COPIE_PROCESS : 'Sharing link is being created',
        COPIE_DONE : 'Share link copied',
        DOCUMENT_CLONED : 'Document saved on your device'
    },
    CHAT_ROOM : {
        MODAL_TITLE : 'Create a new discussion channel',
        MODAL_DESC : `Create a real-time discussion channel to post content in a new topic.
        Vote messages you like and deliver them to others by clone them to your device`,
        MODAL_BUTTON : 'Create',
        CREATE_ROOM_BUTTON : 'New Discussion Channel',
        SEND_BUTTON : 'Send',
        YOUR_MESSAGES : 'Message content ...'
    }
}