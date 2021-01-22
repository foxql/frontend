import base64 from 'base-64';

export function pack(obj)
{   
    return base64.encode(JSON.stringify(obj))
}


export function openPack()
{

}