import { writable } from "svelte/store";

const localStorageKey = 'foxql-offered-storage';
let eventListener = null;
let foxqlClient = null;

export let storedData = localStorage.getItem(localStorageKey) || false;

if(!storedData) {
    storedData = {
        documents : {},
        peerList : {} 
    }
}else{
    try {
        storedData = JSON.parse(storedData);
    }catch(e){
        storedData = {
            documents : {},
            peerList : {} 
        }
    }
    
}

export const store = writable(storedData);
store.subscribe(data => { localStorage.setItem(localStorageKey, data) });

const queryObject = {
    sync : true
};

const eventParams = {
    timeOut : 0, 
    peerListener : 'onOfferedDocuments'
}

async function loader()
{
    if(client.peer.stableConnectionCount() <= 0) {
        return false;
    }

    const query = await foxqlClient.sendEvent(queryObject, eventParams);
    const collection = foxqlClient.database.useCollection('entrys');
    
    if(query.count <= 0) {
        eventListener(storedData.peerList)
        return false;
    }

    query.results.forEach(item => {
        const doc = item.doc;
        const documentId = doc.documentId;

        if(collection.getDoc(documentId)) {
            return false;
        }

        if(storedData.documents[documentId] === undefined) {
            storedData.documents[documentId] = doc;
        }else{
            return false;
        }

        const firstSender = Object.values(item.senderMap)[0].information;
        const peerId = firstSender.sender;
        
        if(storedData.peerList[peerId] === undefined) {

            storedData.peerList[peerId] = {
                offerList : [documentId],
                information : firstSender,
                count: 1
            }

        }else{
            storedData.peerList[peerId].offerList.push(documentId);
            storedData.peerList[peerId].count++;
        }
    });

    store.set(JSON.stringify(storedData));
    eventListener(storedData.peerList)
    

}

export function init()
{
    if(foxqlClient === null){
        foxqlClient = window.client;
    }
    

    if(foxqlClient !== null) {
        setInterval(loader, 1500)
    }

    eventListener(storedData.peerList)
}

export function onOffer(listener)
{
    eventListener = listener;
}

export function getData()
{
    return storedData;
}