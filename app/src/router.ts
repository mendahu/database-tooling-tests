import { Client } from "pg";
import express from "express";
import { PrismaClient } from "@prisma/client";
import {
  getBookById,
  getAuthorStats,
  getAuthorStatsById,
  getAllNames,
  searchBooks,
} from "@prisma/client/sql";

const prisma = new PrismaClient();

export const router = (client: Client) => {
  const router = express.Router();

  router.get("/books/:id", async (req, res) => {
    const book = await prisma.$queryRawTyped(
      getBookById(parseInt(req.params.id))
    );

    const stats = await prisma.$queryRawTyped(
      getAuthorStatsById(parseInt(req.params.id))
    );

    const allStats = await prisma.$queryRawTyped(getAuthorStats());

    const allNames = await prisma.$queryRawTyped(getAllNames());

    const searchedBook = await prisma.$queryRawTyped(searchBooks("Book"));

    res.send(book);
  });

  return router;
};
