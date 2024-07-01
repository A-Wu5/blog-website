import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("homepage.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
