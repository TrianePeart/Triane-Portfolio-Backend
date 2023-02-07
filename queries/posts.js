const db = require("../db/dbConfig.js");


// //INDEX
// const getAllPost= async () => {
//   try {
//     allPost  = await db.any("SELECT * FROM posts");
//     return ;
//   } catch (error) {
//     return error;
//   }
// };

// //SHOW
// const getPost = async (id) => {
//   try {
//     const post = await db.one("SELECT * FROM  WHERE id=$1", id);
//     return ;
//   } catch (error) {
//     return error;
//   }
// };

// //CREATE

// const createPosts = async (post) => {
//   try {
//     const createPost = await db.one(
//       "INSERT INTO  () VALUES () RETURNING *",
//       [
       
//       ]
//     );
//     return createPost;
//   } catch (error) {
//     return error;
//   }
// };

// //UPDATE
// const updatePosts = async (id, article) => {
 
//   try {
//     const updatePosts = await db.one(
//       "UPDATE  SET WHERE id= RETURNING *",
//       [
       
//       ]
//     );
//     return updatePosts;
//   } catch (error) {
//     error;
//   }
// };

// //DELETE
// const deletePosts = async (id) => {
//   try {
//     const  = await db.one(
//       "DELETE FROM posts WHERE ID = $1 RETURNING *",
//       id
//     );
//     return deletePosts;
//   } catch (error) {
//     return error;
//   }
// };

// module.exports = {
//  getAllPost,
//  getPost, 
//  createPosts,
//  updatePosts, 
//  deletePosts
// };
