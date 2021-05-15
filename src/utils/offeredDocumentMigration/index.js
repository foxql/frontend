async function syncEvent(client, collection) {

    const queryObject = {
        sync : true
    };

    const consensus = await client.sendEvent(queryObject, {
        timeOut : 0, // destroy 1.2s listener
        peerListener : 'onSync'
    });

    const results = consensus.results.map((item)=> {
        if(collection.documents[item.doc.documentId] === undefined) {
            return item.doc;
        }

        return false;
    });

    return results;
}

export default function (client, interval)
{
    const collection = client.database.useCollection('entrys')

    setInterval(async()=> {
        const documents = await syncEvent(client, collection);
        if(documents.length > 0) {

            documents.forEach(doc => {
                collection.addDoc({
                    title : doc.title,
                    content : doc.content,
                    createDate : doc.createDate,
                    entryKey : doc.entryKey,
                    parentDocumentId : null
                })
            });

        }
    }, interval)

}