const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// Database Name
let client = undefined;
const collectionName = 'user';
 MongoClient.connect(url,function(err,dbclient) {
if(err){
    throw err;
}else{
    client = dbclient;
    //const db = client.db(dbName);
    console.log("MongoDB connection successfully");
}
});
app.use(express.json());
const dbName = 'MyDatabase';

app.get('/user', async(req, res) => {
    //res.json(user);
    const Users = await client.db(dbName).collection(collectionName);
    const result = await Users.find({}).toArray();
    res.json(result);

});
app.get('/user/:name',async(req,res) => {
    let User = req.params.name; 
  let Users = await client.db(dbName).collection(collectionName);
  const result = await Users.find({name:User}).toArray();
  console.log(result);
    res.json(result);
});

app.delete('/user/:name',async(req,res)=>{
    const User=req.params.name;
    let Users = await client.db(dbName).collection(collectionName);
  const result = await Users.findOneAndDelete({name:User});    
  //  dbName.splice(index,1);    
  console.log(dbName,collectionName);
    res.send(result);
});
app.post('/user',async(req,res) => {
    async function createListing(client, newListing){
        const result = await client.db(dbName).collection(collectionName).insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    }
    await createListing(client,
        {
            name: "kiran",
            course: "Btech",
            yearOfGraduation: 2021,
        }
    );
    const Users = await client.db(dbName).collection(collectionName);
    const result = await Users.find({}).toArray();
    console.log(result);
});
app.put('/user',async(req,res) => {
    async function updateListingByName(client, nameOfListing, updatedListing) {
        const result = await client.db(dbName).collection(collectionName)
                            .updateOne({ name: nameOfListing }, { $set: updatedListing });
    }
    await updateListingByName(client, "kiran", { name:"kiran beniwal"});
    const Users = await client.db(dbName).collection(collectionName);
    const result = await Users.find({}).toArray();
    console.log(result);
});
app.listen(port, () => {
    console.log(3001);
})
