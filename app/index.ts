import express from "express";
import { router } from "./router";
import dbClient from "./db/connection";

const app = express();

app.use(router(dbClient));

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
