const express = require("express");
const Post = require("../controllers/Post");

const router = express.Router();

router.get("/edit/:id", Post.edit);
router.get("/:id", Post.show);
router.post("/store", Post.store);
router.put("/update", Post.update);
router.delete("/delete/:id", Post.destroy);

module.exports = router;
