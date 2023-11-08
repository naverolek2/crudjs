const { MongoClient } = require('mongodb');

const mongoString = "mongodb+srv://sebaskiba11:1234@pierwszadbmongo.kywosci.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    const client = new MongoClient(mongoString);
    try {
        await client.connect();
        await client.db("admin").command({ ping : 1 });
        console.log("Połączono z bazą");
        return client;

    }
    catch(e) {
        console.log("Błąd: " + e);
    }

    
}


async function getAllListing(client) {
    const coll = await client.db('sample_airbnb').collection('listingsAndReviews');
    let list = coll.find().toArray();

    return list;
}
function close(client) {
    client.close();
    console.log("Odłączono od bazy");
}

module.exports = {connect, getAllListing, close};

