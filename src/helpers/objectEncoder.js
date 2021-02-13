import utf8 from 'utf8';
import base64 from 'base-64';


export function encode(object)
{
    const bytes = utf8.encode(JSON.stringify(object));
    return base64.encode(bytes).replace(/\//gi, 'foxql_slash')
}


export function decode(str)
{
    str = str.replace(/foxql_slash/gi, '/')
    const bytes = base64.decode(str);
    return utf8.decode(bytes);
}