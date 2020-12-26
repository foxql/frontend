import Discovery from './views/discovery.svelte';
import Documentation from './views/documentation.svelte';
import Private from './views/private.svelte';
import Whisper from './views/whisper.svelte';



export default [
    {
        name : 'Keşfet',
        path : 'discovery',
        component : Discovery
    },
    {
        name : 'Özel',
        path : 'private',
        component : Private
    },
    {
        name : 'Dokümantasyon',
        path : 'documentation',
        component : Documentation
    },
    {
        name : 'Fısılda',
        path : 'whisper',
        component : Whisper,
        hideMenu : true
    }
];