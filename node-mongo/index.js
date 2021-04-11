//connect to mongo db server
const MongoClient = require('mongodb').MongoClient;
//check if an variable or expression is true , if false it will throw an error and terminate the program
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url,(err,client)=>{
    
    assert.equal(err,null);

    console.log('Connected Correctly to the server');

    const db = client.db(dbname);
    const collection = db.collection('dishes');
    collection.insertOne({"name":"TEST_2","description":"TESTing"},(err,result)=>{
        assert.equal(err,null);

        console.log('After Insert:\n');
        console.log(result.ops);

        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);
            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes',(err,result)=>{
                assert.equal(err,null);
                
                client.close();
            })
        })
    });
});