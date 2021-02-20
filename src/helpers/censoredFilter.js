import blackListWords from '../utils/blacklist.js';
import politicialWords from '../utils/political.js';
import wordReplace from '@foxql/word-replace'; 

import enums from '../enums/enums.js';

let filterMap = {...blackListWords, ...politicialWords};

for(let word in filterMap) {
    const value = filterMap[word];
    filterMap[word] = enums.CENSORED[value];
}

const filter = new wordReplace({
    words : filterMap,
    maxDepth : 1
});


export default (document)=> {
    let censored = false;

    for(let key in document) {
        const value = document[key];
        if(typeof value == 'string') {
            const result = filter.begin(value);
            document[key] = result.orginalText;
            if(result.replaced && !censored){
                censored = true;
            }
        }
    }

    return {
        document,
        censored

    };
}
