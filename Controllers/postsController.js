const express = require("express");
const posts = express.Router();
const {
    getAllPost,
    getAPost, 
    createPosts,
    updatePosts, 
    deletePosts,
} = require('../queries/posts');

const { validateRequest } = require('../validations/helpers')

// INDEX
posts.get("/", async (req, res) => {
  const allPost = await getAllPost();
  if(allPost[0]) {
    res.status(200).json(allPost);
  } else {
    res.status(500).json({ error: "Problem With The Server" });
  }
});

//SHOW
posts.get("/:id", async (req, res) => {
  const { id } = req.params;
  const  singlePost = await getAPost(id);

  if(singlePost) {
    res.status(200).json(singlePost);
  } else {
    res.status(404).json({ error: "Page Not Found" });
  }
});

//CREATE
posts.post("/", validateRequest, async (req, res) => {
  try {
    const newPost = await createPosts(req.body) ;
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//UPDATE
posts.put('/:id', async (req, res) => {
        const { id } = req.params;
        const updatePost = await updatePosts(id, req.body);
        if(updatePost){
            res.status(200).json(update)
        } else{
            res.status(404).json({ error: 'Posts Not Found'})
    }
})

//CODE HITTING ERROR CHECK BACK IN MORNING

// DELETE
posts.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deleted = await deletePosts(id);
    if (deleted.id) {
      res.status(200).json(deleted);
    } else {
        res.status(404).json({ error: "Post Not Found" });
    }
});

module.exports = posts;