import { Client } from "pg";
import express from "express";

export const router = (client: Client) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const { rows } = await client.query("SELECT * FROM users");
    res.send(rows);
  });

  return router;
};
