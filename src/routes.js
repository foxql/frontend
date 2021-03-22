import Entry from './views/entry.svelte';
import Home from './views/home.svelte';
import Share from './views/share.svelte';
import News from './views/news.svelte';
import Node from './views/node.svelte';
import Search from './views/search.svelte';

export default [
    {
        path : '/entry/:id/:entryKey',
        component : Entry
    },
    {
        path : '/',
        component : Home
    },
    {
        path : '/home',
        component : Home
    },
    {
        path : '/share',
        component : Share
    },
    {
        path : '/news',
        component : News
    },
    {
        path : '/node',
        component : Node
    },
    {
        path : '/search/:queryString',
        component : Search
    },
    {
        path : '/search',
        component : Search
    }
];