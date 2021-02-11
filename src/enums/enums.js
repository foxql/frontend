import tr from './langs/tr.js';
import en from './langs/en.js'

const countrys = {
    usa : en,
    tr : tr
};

const currentCountry = localStorage.getItem('country') || 'usa';

export default countrys[currentCountry];