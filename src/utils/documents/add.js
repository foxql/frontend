import { notifier } from '@beyonk/svelte-notifications'
import lang from '../lang';

const notificationDestroyTime = 1200;


function bodyControl(body)
{

    const title = body.title || false;
    const content = body.content || false;

    if(typeof title !== 'string' || typeof content !== 'string') {
        return false;
    }   

    const titleLength = title.length;
    const contentLength = content.length;

    if(titleLength < 2) {
        notifier.danger(lang.APP.TITLE_MIN_LENGTH, notificationDestroyTime)
        return false;
    }

    if(contentLength < 1) {
        notifier.danger(lang.APP.CONTENT_MIN_LENGTH, notificationDestroyTime)
        return false;
    }


    return true;

}


export default (collection, doc)=> {

    if(!bodyControl(doc)) {
        return false;
    }

    const documentRef = collection.addDoc(doc);

    if(documentRef) {
        notifier.success(lang.APP.CONTENT_ADDED, 1200)
        return documentRef;
    }

    notifier.danger(lang.APP.CONTENT_NOT_ADDED, 1200)
    return false;

}