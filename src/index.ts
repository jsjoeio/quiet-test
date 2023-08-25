import express from "express";
import { hasDuplicates } from "./lib";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // TODO@jsjoeio - validate the data before handling on server
  // i.e. hello,world
  // @ts-ignore fix me later
  const clientValues = req.query.values.split(",") || [];
  // What if serverValues is a very large set of values?
  // 1 TB
  // 100% accuracy 
  const serverValues = ["goodbye"];

  // Client should pass the server the values
  res.send({
    hasDuplicates: hasDuplicates(serverValues, clientValues),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
