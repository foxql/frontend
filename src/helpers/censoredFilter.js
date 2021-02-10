import blackListWords from '../utils/blacklist.js';
import politicialWords from '../utils/political.js';
import enums from '../enums/enums.js';

const filterMap = {...blackListWords, ...politicialWords};

function tokenization(str)
{
    return str.toLowerCase().
    replace(/ö/gi, 'o').
    replace(/ç/gi, 'c').
    replace(/ş/gi, 's').
    replace(/ğ/gi, 'g').
    replace(/ü/gi, 'u').
    replace(/ı/gi, 'i').
    replace(/[^\w\s]/gi, ' ').
    replace(/  +/g, ' ').
    trim();
}

function filter(string)
{
    const stringArray = string.split(' ');
    const termLength = stringArray.length;

    if(termLength <= 0){
        return string;
    }

    let filteredCount = 0;

    for(let key in stringArray) {
        const str = tokenization(stringArray[key]);
        const findInMap = filterMap[str] || false;
        if(findInMap) {
            const regexp = new RegExp(stringArray[key], "gi");
            if(filteredCount > 0){
                string = string.replace(regexp, "");
            }else{
                string = string.replace(regexp, enums.CENSORED[findInMap]);
            }
            filteredCount = filteredCount + 1;
        }
    }
    return string;
}



export default function(document)
{
    for(let key in document) {
        let value = document[key];
        if(typeof value !== 'string'){
            continue;
        }
        
        document[key] = filter(value);

    }
    return document;
}