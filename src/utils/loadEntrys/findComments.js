export default (results, collection) =>
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
            }else{ // parentDocument is not found.
                collection.deleteDoc(documentId)
            }

        }
    })


    return hashMap;
}