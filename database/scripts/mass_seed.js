const client = require("../utils/connection");
const parseSql = require("../utils/parse_sql");

const generateRandomData = require("../utils/generate_random_data");

const QTY = process.argv[2] || 100000;

const massSeed = async () => {
  console.log("Generating random data...", QTY);
  const { authors, books } = generateRandomData({ qty: QTY, offset: 9 });

  const massInsertAuthorQuery = parseSql("./sql/mass_authors.sql");
  const massInsertBooksQuery = parseSql("./sql/mass_books.sql");

  try {
    await client.query(massInsertAuthorQuery, [
      authors.ids,
      authors.names,
      authors.urls,
    ]);
    console.log("Authors Inserted Successfully!");
  } catch (error) {
    throw error;
  }

  try {
    await client.query(massInsertBooksQuery, [
      books.titles,
      books.descriptions,
      books.author_ids,
      books.urls,
    ]);
    console.log("Books Inserted Successfully!");
  } catch (error) {
    throw error;
  }
};

massSeed().then(() => {
  client.end();
});
