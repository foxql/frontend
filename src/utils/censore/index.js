import blackListWords from './words/blacklist.js';
import politicialWords from './words/political.js';
import wordReplace from '@foxql/word-replace'; 

import lang from '../lang/index';

let filterMap = {...blackListWords, ...politicialWords};

for(let word in filterMap) {
    const value = filterMap[word];
    filterMap[word] = lang.CENSORED[value];
}

const filter = new wordReplace({
    words : filterMap,
    maxDepth : 4
});


export default (text)=> {
    const censored = filter.begin(text);
    return censored.replaced ? censored.orginalText : text;
}