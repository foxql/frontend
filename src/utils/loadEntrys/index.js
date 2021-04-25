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

    query.results = sortByCreateDate(query.results)

    console.log({
        metadata : metadata,
        query : query
    })

    return {
        metadata : metadata,
        query : query
    }
}   