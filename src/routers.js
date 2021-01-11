import Discovery from './views/discovery.svelte';
import Search from './views/search.svelte';
import Entry from './views/entry.svelte';
import Home from './views/home.svelte';

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
        path : 'discovery',
        component : Discovery,
        icon : 'fas fa-user',
        client : true
    },
    {
        name : 'Topluluk',
        path : 'discovery',
        component : Home,
        icon : 'fas fa-handshake',
        client : true
    },
    {
        name : 'Dokümantasyon',
        path : 'discovery',
        component : Home,
        icon : 'fab fa-github',
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
    }
];