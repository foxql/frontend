import Discovery from './views/discovery.svelte';
import Search from './views/search.svelte';
import Entry from './views/entry.svelte';

export default [
    {
        name : 'Keşfet',
        path : 'discovery',
        component : Discovery,
        icon : 'globe-europe',
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