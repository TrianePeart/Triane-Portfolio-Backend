const db = require("../db/dbConfig.js");



//INDEX
const getAllPost 
= async () => {
  try {
   const allPost = await db.any("SELECT * FROM posts");
    return allPost;
  } catch (error) {
    return error;
  }
};

//SHOW
const getAPost = async (id) => {
  try {
    const aPost = await db.one("SELECT * FROM posts WHERE id=$1", id);
    return aPost;
  } catch (error) {
    return error;
  }
};

//CREATE
const createPosts = async (post) => {
  try {

    const newPosts = await db.one(
      "INSERT INTO posts (title, author, content, post_type, is_liked, is_bookmarked) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        post.title, 
        post.author,
        post.content, 
        post.post_type,
        post.is_liked,
        post.is_bookmarked
      ]
    );
    return newPosts;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updatePosts = async (id, post) => {
  try {
    const updatePost = await db.one(
      "UPDATE posts SET title=$1, author=$2, content=$3, post_type=$4, is_liked=$5, is_bookmarked=$6 WHERE id=$7 RETURNING *",
      [
        post.title, 
        post.author,
        post.content, 
        post.post_type,
        post.is_liked,
        post.is_bookmarked,
        id
        //ID might need to be changed if validation is made
      ]
    );
    return updatePost;
  } catch (error) {
    error;
  }
};

//DELETE
const deletePosts = async (id) => {
  try {
    const deletePosts = await db.one(
      "DELETE FROM posts WHERE ID =$1 RETURNING *",
      id
    );
    return deletePosts;
  } catch (error) {
    return error;
  }
};

module.exports = {
 getAllPost,
 getAPost, 
 createPosts,
 updatePosts, 
 deletePosts
};
