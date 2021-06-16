const mediaTypes = {
    png : 'image',
    jpg : 'image',
    gif : 'image',
    jpeg : 'image'
};

export default (string)=> {
    try {

        const parse = new URL(string);
        const lastChar = parse.pathname;


        const splitDot = lastChar.split('.');
        if(splitDot.length > 0) { // dedected dot
            const lastWord = splitDot[splitDot.length - 1];

            if(mediaTypes[lastWord] !== undefined) { // image dedected
                string = string.replace(string, `<img src = '${string}'  class = "post-content-image">`)
            }else{
                string = string.replace(string, `<a href = '${string}' target = "_blank" class = "post-content-link">${string.slice(0, 125)}</a>`)
            }

        }
        return string;
    }catch(e)
    {
        return false; // is not a link
    }
}