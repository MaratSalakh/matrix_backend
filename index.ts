import express from "express";
import path from "path";
import serverRoutes from "./src/todo/todo.router";

const PORT = process.env.PORT ?? 4200;
export const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/ejs"));

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
