const express = require("express");

const db = require("../dbconfig");

const router = express.Router();

router.post("/", (req, res) => {
  db("actions")
    .insert(req.body)
    .then(added => {
      res.status(201).json(added);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;