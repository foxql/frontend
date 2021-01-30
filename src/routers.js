import Discovery from './views/discovery.svelte';
import Search from './views/search.svelte';
import Entry from './views/entry.svelte';
import Home from './views/home.svelte';
import Profile from './views/profile.svelte';
import Trends from './views/trends.svelte';

import enums from './enums/enums.js';

export default [
    {
        name : enums.HOME,
        path : '/',
        component : Home,
        icon : 'fas fa-paper-plane',
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
        name : enums.TRENDS,
        path : 'trends',
        component : Trends,
        icon : 'fa fa-fire-alt',
        client : true,
        hideDesktop : true
    }
];