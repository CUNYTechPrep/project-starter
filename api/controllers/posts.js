const express = require("express");
const router = express.Router();
const db = require("../models");
const { Post, Comment } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

router.get("/", async (req, res) => {
    // await Post.create({
    //     content: "This is content 3"
    // });

    Post.findAll({
        include: [
            {
                model: Comment,
                as: "comments"
            }
        ]
    })
        .then(posts => res.json(posts))
        .catch(err => console.error(err));
});

router.get("/comment", async (req, res) => {
    // const comment = await Comment.create({
    //     comment: "This is comment 1",
    //     postId: 2
    // });

    //res.json({ msg: "Success" });
    Comment.findAll({})
        .then(comment => res.json(comment))
        .catch(err => console.error(err));
});

router.post("/", (req, res) => {
    let { content } = req.body;

    Post.create({ content })
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    Post.findByPk(id).then(post => {
        if (!post) {
            return res.sendStatus(404);
        }

        res.json(post);
    });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    Post.findByPk(id).then(post => {
        if (!post) {
            return res.sendStatus(404);
        }

        post.content = req.body.content;
        post.save()
            .then(post => {
                res.json(post);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Post.findByPk(id).then(post => {
        if (!post) {
            return res.sendStatus(404);
        }

        post.destroy();
        res.sendStatus(204);
    });
});

module.exports = router;
