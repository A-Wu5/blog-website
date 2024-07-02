import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

var blogPosts = {};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/new-post", (req, res) => {
  let postTitle = req.body["title"];
  if (postTitle in blogPosts) {
    //Handle duplicate titles
  } else {
    // insert new post object into blogPosts
    blogPosts[postTitle] = {
      title: postTitle,
      author_first: req.body["first-name"],
      author_last: req.body["last-name"],
      date: new Date(),
      content: req.body["content"],
    };
    res.render("submitted.ejs");
  }
});

app.post("/edit-post", (req, res) => {
  let postTitle = req.body["title"];
  blogPosts[postTitle][content] = req.body["content"];
  res.render("submitted.ejs");
});

app.get("/view/:title", (req, res) => {
  let title = req.params.title;
  res.render(`/view/${title}`, { post: blogPosts[title] });
});

app.get("/new-post", (req, res) => {
  res.render("new-post.ejs");
});

app.get("/", (req, res) => {
  res.render("homepage.ejs", { posts: blogPosts });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
