import { Client } from "pg";
import express from "express";

import { sql } from "drizzle-orm";
// import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";
import { authors, books } from "../drizzle/schema";

const db = drizzle(process.env.DATABASE_URL!);

export const router = (client: Client) => {
  const router = express.Router();

  router.get("/:id", async (req, res) => {
    const { rows } = await client.query("SELECT * FROM users");
    res.send(rows);

    const result = await db.select({ id: authors.id }).from(authors);

    const rawResult = await db.execute(sql`SELECT
      ${books.id},
      ${books.title},
      ${books.description},
      (SELECT
        row_to_json(authors)
          FROM
            (SELECT ${authors.id}, ${authors.name}) as authors
      ) as author,
      COALESCE(${books.url}, ${books.url}) as url
    FROM
     ${books}
    JOIN ${authors} ON ${authors.id} = ${books.authorId}
    WHERE
    ${books.id} = ${req.params.id};`);
  });

  return router;
};
