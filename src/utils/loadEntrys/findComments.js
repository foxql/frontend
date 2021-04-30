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
            }else{ // parentDocument is not in results.
                let parentDocument = collection.getDoc(parentDocumentId);
                if(parentDocument) {
                    parentDocument.comments = [doc]
                    hashMap[parentDocumentId] = parentDocument;
                }else{
                    collection.deleteDoc(documentId)
                }
                
            }

        }
    })


    return hashMap;
}