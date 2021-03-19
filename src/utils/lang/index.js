import tr from './langs/tr.js';
import en from './langs/en.js'

const langs = {
    tr : tr,
    en : en
};

const currentCountry = localStorage.getItem('lang') || 'tr';

export default langs[currentCountry];