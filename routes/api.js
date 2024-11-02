const express = require("express");
const blogController = require("../app/controllers/blogController");

const router = express.Router();

router.get("/create-blog", blogController.createBlog);
router.post("/read-blog", blogController.readBlog);
router.put("/update-blog", blogController.updateBlog);
router.delete("/delete-blog", blogController.deleteBlog);

module.exports = router;
