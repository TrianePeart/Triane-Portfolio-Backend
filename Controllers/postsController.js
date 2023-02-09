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
  if(allPost) {
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
posts.post("/", async (req, res) => {
  try {
    const valid = validateRequest(req.body)
    const newPost = await createPosts(valid) ;
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
  //Giving different response so I know which error is effected 
});

//UPDATE
posts.put('/:id', async(req,res)=>{
    try {
        const { id }=req.params;
        const valid = validateRequest(req.body);
        const update = await updatePosts(id, valid);
        if(update.id){
            res.status(200).json(update)
        } else{
            res.status(404).json({ error: 'Posts Not Found'})
        }
    } catch (error) {
        res.status(404).json({error: "Post Not Found"})
    }
})

// DELETE
posts.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await deletePosts(id);
      if (deleted.id) {
        res.status(200).json(deleted);
      } else {
        res.status(404).json({ error: "Post Not Found" });
      }
    } catch (error) {
      return error;
    }
});

module.exports = posts;