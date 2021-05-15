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
    let newDocumentCount = localStorage.getItem('new-documents') || 0;

    setInterval(async()=> {
        const documents = await syncEvent(client, collection);
        if(documents.length > 0) {

            documents.forEach(doc => {

                if(collection.documents[doc.documentId] == undefined) {

                    collection.addDoc({
                        title : doc.title,
                        content : doc.content,
                        createDate : doc.createDate,
                        entryKey : doc.entryKey,
                        parentDocumentId : doc.parentDocumentId,
                        documentId : doc.documentId
                    })
                    newDocumentCount++;
                }

            });


            localStorage.setItem('new-documents', newDocumentCount)

        }
    }, interval)

}