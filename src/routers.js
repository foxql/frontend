import Discovery from './views/discovery.svelte';
import Search from './views/search.svelte';
import Entry from './views/entry.svelte';
import Home from './views/home.svelte';
import Profile from './views/profile.svelte';
import Contribute from './views/contribute.svelte';
import Node from './views/node.svelte';

export default [
    {
        name : 'Anasayfa',
        path : '/',
        component : Home,
        icon : 'fas fa-home',
        client : true
    },
    {
        name : 'Keşfet',
        path : 'discovery',
        component : Discovery,
        icon : 'fas fa-globe-europe',
        client : true
    },
    {
        name : 'Profil',
        path : 'profile',
        component : Profile,
        icon : 'fas fa-user',
        client : true
    },
    {
        name : 'Katkıda bulun',
        path : 'contribute',
        component : Contribute,
        icon : 'fas fa-handshake',
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
        path : 'entry/:id/:title',
        component : Entry,
        hideMenu : true,
        client : true
    },
    {
        name : 'foxnode',
        path : 'fox-node',
        component : Node,
        hideMenu : true,
        client : false
    }
];