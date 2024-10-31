import pg from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL || DATABASE_URL === "") {
  console.log("Current DATABASE_URL: ", DATABASE_URL);
  throw "DATABASE_URL is not set in the .env file";
}

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export default client;
