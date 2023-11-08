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
module.exports = {connect};
