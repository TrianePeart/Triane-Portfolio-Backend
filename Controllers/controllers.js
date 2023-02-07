const express = require("express");
const snacks = express.Router();


//INDEX
.get("/", async (req, res) => {
  const  = await ();
  if () {
    res.status(200).json();
  } else {
    res.status(500).json({ error: "Problem With The Server" });
  }
});

//SHOW
.get("/:id", async (req, res) => {
  const { id } = req.params;
  const  = await (id);
  if () {
    res.status(200).json();
  } else {
    res.status(404).json({ error: "Page Not Found" });
  }
});

//CREATE
.post("/", async (req, res) => {
  const  = req.body;
 
  try {
    const = await ;
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: "Problem With The Server" });
  }
});

//UPDATE
.put('/:id', async(req,res)=>{
    try {
        const {id}=req.params
        const  = await (id, req.body)
        res.status(200).json()
    } catch (error) {
        res.status(404).json({error:"Problem With The Server"})
    }
  })

//DELETE
.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const = await (id);
    res.status(200).json();
  } catch (error) {
    res.status(404).json({ error: "Page Not Found" });
  }
});

module.exports = ;