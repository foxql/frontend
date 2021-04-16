import tr from './langs/tr.js';
import en from './langs/en.js'

const langs = {
    tr : tr,
    en : en
};

const currentCountry = localStorage.getItem('lang') || 'en';

export default langs[currentCountry];