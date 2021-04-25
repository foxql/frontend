import censoreFilter from '../censore';


function searchOnMyIndex(collection, entryKey)
{
    let documentPool = []
    const findInIndexs = collection.indexs['entryKey'][entryKey] || false;
    if(findInIndexs) {
        Object.keys(findInIndexs).forEach((ref)=>{
            documentPool.push(
                collection.getDoc(ref)
            );
        })
    }

    return documentPool;
}

function cloneObject(object)
{
    return JSON.parse(JSON.stringify(object))
}

function sortByCreateDate(documents)
{
    documents.sort((a,b)=>{
        return new Date(a.doc.createDate) - new Date(b.doc.createDate);
    });

    return documents
}


function findResultsInComments(results)
{
    let hashMap = {};
    results.forEach( item => {

        let doc = item.doc;
        const documentId = doc.documentId;
        const parentDocumentId = doc.parentDocumentId;

        if(parentDocumentId === null) {

            doc.comments = [];

            hashMap[documentId] = doc;
        }else {

            let mappingDoc = hashMap[parentDocumentId] || false;
            if(mappingDoc) { // commented doc is found
                mappingDoc.comments.push(doc)
            }

        }
    })


    return hashMap;

}

export default async ({client, documentId, entryKey}) => {

    const metadata = {
        title : '',
        orginalTitle : ''
    }


    const queryObject = {
        ref : documentId,
        collection : 'entrys',
        match : {
            field : 'entryKey',
            value : 'parent-key'
        }
    };

    const collection = client.database.useCollection('entrys');

    const documentPool = searchOnMyIndex(collection, entryKey);

    let query = await client.sendEvent(queryObject, {
        timeOut : 200, 
        peerListener : 'onDocumentByRef',
        documentPool : documentPool
    });

    if(query.count <= 0) {
        return false;
    }   

    const firstEntry = cloneObject(query.results[0].doc);

    let filteredFirstEntry = censoreFilter(
        firstEntry
    ).document;

    metadata.title = filteredFirstEntry.title;
    metadata.orginalTitle = filteredFirstEntry.title;

    let filteredResults = findResultsInComments(
        sortByCreateDate(query.results)
    )


    const finalResults = Object.values(filteredResults).map(item => {

        if(item.comments.length > 0) {
            item.comments.sort((a,b)=>{
                return new Date(a.createDate) - new Date(b.createDate);
            });
        }

        return item;

    })

    return {
        metadata : metadata,
        query : finalResults
    }
}   