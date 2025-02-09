import express from "express";
import path from "path";
import serverRoutes from "./routes/server.js";

const __dirname = path.resolve();

const PORT = process.env.PORT ?? 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "ejs"));

app.use(express.static(path.resolve(__dirname, "static")));

app.use(serverRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/features", (req, res) => {
  res.render("features");
});

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "static", "index.html"));
// });

app.listen(PORT);
