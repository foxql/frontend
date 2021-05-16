async function sendEvent(client) {

    const queryObject = {
        timeDiff : 24000,
        collection : 'entrys'
    };

    const results = await client.sendEvent(queryObject, {
        timeOut : 200, // destroy 1.2s listener
        peerListener : 'onDocumentByTimeDiff'
    });

    return results;
}

export default async function(client) {

    const collection = client.database.useCollection('entrys');

    let dedectedNewDocuments = 0;

    const query = await sendEvent(client);

    if(query.count <= 0) {
        return false;
    }


    query.results.forEach( item => {
        const doc = item.doc;
        if(collection.documents[doc.documentId] != undefined) {
            return false;
        }
        collection.addDoc(doc);
        dedectedNewDocuments += 1;
    });

    if(dedectedNewDocuments > 0) {
        localStorage.setItem('new-documents',dedectedNewDocuments)
    }

}