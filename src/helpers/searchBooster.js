const boostRules = {
    webPage : {
        mainPage : (query, doc)=>{
            const replacedUri = doc.url.replace(doc.domain, '').replace(/(^\w+:|^)\/\//, '').replace('www.', '');
            if(query.length == 1 && replacedUri.length<=1) {
                return true;
            }

            return false;
        }
    }
};

class booster
{

    boostedResults = {};
    rules = {}
    query = null;
    results = {}



    constructor(query, docs)
    {
        this.query = query.split(' ');
        this.docs = docs;
    }

    setRule(rules)
    {
        this.rules = rules
    }

    boost()
    {
        const collections = Object.keys(this.rules);
        
        this.docs.results.forEach( (doc, i) => {
            const collection = doc._collection;
            if(!collections.includes(collection)) {return false}

            const document = doc.document;

            const rules = this.rules[collection];

            for(let rule in rules) {
                const boostMethod = boostRules[collection][rule] || false;
                if(typeof boostMethod !== 'function') {continue}

                if(boostMethod(this.query, document)){
                    this.docs.results[i].score += rules[rule];
                }
                

            }
        });

        this.docs.results.sort(function(a,b) {
            return b.score - a.score;
        });

        return this.docs
    }

}





export default booster;