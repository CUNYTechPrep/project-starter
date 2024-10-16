import express from "express";

// TODO: load your controllers here
import microPostsController from "./microPosts.js";

// TODO: mount your controllers here to a URL path
const router = express.Router();
router.use("/micro_posts", microPostsController);

export default router;
