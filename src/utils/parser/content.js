import censore from '../censore';
import xssReplace from '../xss';
import methods from './methods'

export default function (content) {

    content = xssReplace(
        censore(content)
    );

    const splitLineBreak = content.split('\n');

    splitLineBreak.forEach((line, i) => {
        const splitWords = line.split(' ');
        splitWords.forEach((word) => {
            if(word.trim() !== '') {
                methods.forEach(method => {
                    const process = method(word);
                    if(process) {
                        content = content.replace(word, 
                            process
                        )
                    }
                    
                })
            }
            
        })
    });



    return content.replace(/\n/g, "<br />");

}   