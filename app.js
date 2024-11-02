// app.js

// Importing required modules
const express = require("express");
const app = express();
const PORT = process.env.PORT ||3000;

// Middleware to parse JSON
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Grameen Blog API!");
});

// Blog Controller
// --- This would be "controllers/blogController.js" in a multi-file setup ---
const blogController = {
  // Create Blog
  createBlog: (req, res) => {
    res.status(201).json({ message: "Blog created successfully" });
  },

  // Read Blog
  readBlog: (req, res) => {g
    res.status(200).json({ message: "Blog read successfully" });
  },

  // Update Blog
  updateBlog: (req, res) => {
    res.status(200).json({ message: "Blog update successfully" });
  },

  // Delete Blog
  deleteBlog: (req, res) => {
    res.status(200).json({ message: "Blog delete successfully" });
  },
};

// Blog Routes
// --- This would be "routes/blogRoutes.js" in a multi-file setup ---
const router = express.Router();

router.post("/create-blog", blogController.createBlog);
router.get("/read-blog", blogController.readBlog);
router.put("/update-blog", blogController.updateBlog);
router.delete("/delete-blog", blogController.deleteBlog);

// Using the blog routes in the main app
app.use("/api/blog", router);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
