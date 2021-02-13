import Discovery from './views/discovery.svelte';
import Search from './views/search.svelte';
import Entry from './views/entry.svelte';
import Share from './views/share.svelte';
import Profile from './views/profile.svelte';
import Trends from './views/trends.svelte';
import ExtensionNewEntry from './views/extensionNewEntry.svelte';
import SharedEntry from './views/sharedEntry.svelte';
import Room from './views/room.svelte';

import enums from './enums/enums.js';

export default [
    {
        name : enums.TRENDS,
        path : 'trends',
        component : Trends,
        icon : 'fa fa-fire-alt',
        client : true,
        hideDesktop : false
    },
    {
        name : enums.DISCOVERY,
        path : 'discovery',
        component : Discovery,
        icon : 'fas fa-globe-europe',
        client : true,
        hideDesktop : false
    },
    {
        name : enums.PROFILE,
        path : 'profile',
        component : Profile,
        icon : 'fas fa-user',
        client : true,
        hideDesktop : false
    },
    {
        name : 'Ara',
        path : 'search/:query',
        component : Search,
        hideMenu : true,
        client : true,
        hideDesktop : false
    },
    {
        name : 'Entry',
        path : 'entry/:id',
        component : Entry,
        hideMenu : true,
        client : true,
        hideDesktop : false
    },
    {
        name : enums.SHARE,
        path : '/share',
        component : Share,
        icon : 'fas fa-paper-plane',
        client : true,
        hideDesktop : false
    },
    {
        name : 'extension-entry',
        path : '/extension-entry',
        component : ExtensionNewEntry,
        icon : 'fas fa-paper-plane',
        client : true,
        hideDesktop : false,
        hideMenu : true
    },
    {
        name : 'shared-entry',
        path : '/shared/:encodedDocument',
        component : SharedEntry,
        client : true,
        hideMenu : true
    },
    {
        name : 'room',
        path : '/room/:encodedRoomName',
        component : Room,
        client : true,
        hideMenu : true
    }
];