import { Client } from "pg";
import express from "express";

const jsonQuery = `
  SELECT
    books.id,
    books.title,
    books.description,
    (SELECT
      row_to_json(authors)
        FROM
          (SELECT authors.id, authors.name) as authors
    ) as author
  FROM
    books
  JOIN authors ON authors.id = books.author_id;
`;

const notJsonQuery = `
  SELECT
    books.id,
    books.title,
    books.description,
    authors.id as author_id,
    authors.name as author_name
  FROM
    books
  JOIN authors ON authors.id = books.author_id;
`;

type AuthorDTO = {
  id: number;
  name: string;
};

type BookDTO = {
  id: number;
  title: string;
  description: string;
  author: AuthorDTO;
};

type BookResponse = {
  id: number;
  title: string;
  description: string;
  author_id: number;
  author_name: string;
};

export const router = (client: Client) => {
  const router = express.Router();

  router.get("/json", async (req, res) => {
    const { rows } = await client.query<BookDTO>(jsonQuery);
    res.json(rows);
  });

  router.get("/not-json", async (req, res) => {
    const { rows } = await client.query<BookResponse>(notJsonQuery);

    const books: BookDTO[] = [];

    for (const row of rows) {
      books.push({
        id: row.id,
        title: row.title,
        description: row.description,
        author: {
          id: row.author_id,
          name: row.author_name,
        },
      });
    }

    res.json(books);
  });

  return router;
};
