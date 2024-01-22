// https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database

/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */

const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const USERNAME = process.env.USER_NAME
const USERPASS = process.env.USER_PASSWORD
const CLUSTERURL = process.env.CLUSTER_URL
const DBNAME = process.env.DATABASE_NAME

const uri =
	`mongodb+srv://${USERNAME}:${USERPASS}@${CLUSTERURL}/?retryWrites=true&w=majority`;
 
console.log(`ENV VARIABLES: ${USERNAME}`);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		// Send a ping to confirm a successful connection
		var term = await client.db(DBNAME).command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
		await listDatabases(client);
	} catch (e) {
		console.error(e);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	} 
}
run().catch(console.dir);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};