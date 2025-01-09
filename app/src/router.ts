import { Client, Pool } from "pg";
import express from "express";
import { Kysely, PostgresDialect, sql } from "kysely";
import { DB } from "kysely-codegen";

const dialect = new PostgresDialect({
  pool: new Pool({
    database: "test",
    host: "localhost",
    user: "admin",
    port: 5434,
    max: 10,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});

export const router = (client: Client) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const { rows } = await client.query("SELECT * FROM users");
    res.send(rows);

    const authors = await db.selectFrom("authors").selectAll().execute();

    const result = await sql`SELECT id name FROM authors`.execute(db);
  });

  return router;
};
