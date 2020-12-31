import Discovery from './views/discovery.svelte';
import Documentation from './views/documentation.svelte';
import Private from './views/private.svelte';
import Whisper from './views/whisper.svelte';
import Search from './views/search.svelte';

export default [
    {
        name : 'Keşfet',
        path : 'discovery',
        component : Discovery,
        icon : 'globe-europe',
        client : true
    },
    {
        name : 'Sahiplik',
        path : 'private',
        component : Private,
        icon : 'user-secret',
        client : true
    },
    {
        name : 'Dokümantasyon',
        path : 'documentation',
        component : Documentation,
        icon : 'file'
    },
    {
        name : 'Ayarlar',
        path : 'settings',
        component : Documentation,
        icon : 'cog'
    },
    {
        name : 'Fısılda',
        path : 'whisper',
        component : Whisper,
        hideMenu : true
    },
    {
        name : 'Ara',
        path : 'search/:query',
        component : Search,
        hideMenu : true,
        client : true
    }
];