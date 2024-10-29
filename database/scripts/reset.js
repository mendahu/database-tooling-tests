const client = require("../utils/connection");
const parseSql = require("../utils/parse_sql");

const reset = async () => {
  const schemaRestQuery = parseSql("./sql/schema.sql");

  try {
    await client.query(schemaRestQuery);
    console.log("Tables dropped successfully!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }

  const seedQuery = parseSql("./sql/seeds.sql");

  try {
    await client.query(seedQuery);
    console.log("Tables seeded successfully!");
  } catch (error) {
    console.error("Error seeding tables!");
    throw error;
  }
};

reset().then(() => {
  client.end();
});
