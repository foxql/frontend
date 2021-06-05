import Entry from './views/entry.svelte';
import Discovery from './views/discovery.svelte';
import Share from './views/share.svelte';
import News from './views/news.svelte';
import Node from './views/node.svelte';
import Search from './views/search.svelte';
import Trends from './views/trends.svelte';
import Home from './views/home.svelte';
import Offers from './views/offers.svelte';
import Sponsors from './views/sponsors.svelte'
import Stats from './views/stats.svelte';
import Settings from './views/settings.svelte';

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
        path : '/discovery',
        component : Discovery
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
    },
    {
        path : '/trends',
        component : Trends
    },
    {
        path : '/offers',
        component : Offers
    },
    {
        path : '/sponsors',
        component : Sponsors
    },
    {
        path : '/stats',
        component : Stats
    },
    {
        path : '/settings',
        component : Settings
    }
];