import express from "express";
const router = express.Router();
import Schema from "./schema.js";

router.post("/upload", (req, res) => {
  const body = req.body;

  Schema.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
router.get("/sync", (req, res) => {
  Schema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});



export default router;
