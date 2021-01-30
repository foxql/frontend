import Discovery from './views/discovery.svelte';
import Search from './views/search.svelte';
import Entry from './views/entry.svelte';
import Home from './views/home.svelte';
import Profile from './views/profile.svelte';

import enums from './enums/enums.js';

export default [
    {
        name : enums.HOME,
        path : '/',
        component : Home,
        icon : 'fas fa-home',
        client : true
    },
    {
        name : enums.DISCOVERY,
        path : 'discovery',
        component : Discovery,
        icon : 'fas fa-globe-europe',
        client : true
    },
    {
        name : enums.PROFILE,
        path : 'profile',
        component : Profile,
        icon : 'fas fa-user',
        client : true
    },
    {
        name : 'Ara',
        path : 'search/:query',
        component : Search,
        hideMenu : true,
        client : true
    },
    {
        name : 'Entry',
        path : 'entry/:id',
        component : Entry,
        hideMenu : true,
        client : true
    }
];