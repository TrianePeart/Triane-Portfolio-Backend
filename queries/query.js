const db = require("../db/dbConfig.js");


//INDEX
const  = async () => {
  try {
      = await db.any("SELECT * FROM ");
    return ;
  } catch (error) {
    return error;
  }
};

//SHOW
const  = async (id) => {
  try {
    const  = await db.one("SELECT * FROM  WHERE id=$1", id);
    return ;
  } catch (error) {
    return error;
  }
};

//CREATE

const  = async () => {
  try {
    const  = await db.one(
      "INSERT INTO  () VALUES () RETURNING *",
      [
       
      ]
    );
    return createSnack;
  } catch (error) {
    return error;
  }
};

//UPDATE
const  = async (id, ) => {
 
  try {
    const  = await db.one(
      "UPDATE  SET WHERE id= RETURNING *",
      [
       
      ]
    );
    return ;
  } catch (error) {
    error;
  }
};

//DELETE
const  = async (id) => {
  try {
    const  = await db.one(
      "DELETE FROM  WHERE ID = $1 RETURNING *",
      id
    );
    return ;
  } catch (error) {
    return error;
  }
};

module.exports = {
 
};
