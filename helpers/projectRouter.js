const express = require("express");

const db = require("../dbconfig");

const router = express.Router();

router.get("/", async (req, res) => {
  db("projects as p")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const project = await db('projects').where({id})
    const actions = await db('actions').where({project_id: id})
    res.status(200).json({...project[0], actions: [...actions],})
  } catch {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  db("projects")
    .insert(req.body)
    .then(added => {
      res.status(201).json(added);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
