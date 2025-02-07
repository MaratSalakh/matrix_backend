import express from "express";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("<span>Start</span>");
});

app.listen(PORT);
