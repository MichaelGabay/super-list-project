const express = require("express");
const { missionModel } = require("../models/missionModel");
const router = express.Router();



router.post("/", async (req, res) => {
  try {
    let data = new missionModel(req.body);
    await data.save();
    res.json(data);
  }
  catch (err) {
    res.status(401);
  }
})

router.get("/", async (req, res) => {
  try {
    let data = await missionModel.find({}).sort({_id:-1})
    res.json(data);
  }
  catch (err) {
    res.status(401);
  }
})

router.put("/", async (req, res) => {
  try {

    let id = req.query.id;
    let flag = await missionModel.findOne({ _id: id }, { flag: 1, _id: 0 })
    let data = await missionModel.updateOne({ _id: id }, { flag: !flag.flag });
    res.json(data);
  }
  catch (err) {
    res.status(401);
  }
})

router.delete("/", async (req, res) => {
  try {
    let id = req.query.id;
    let data = await missionModel.deleteOne({ _id: id });
    res.json(data);
  }
  catch (err) {
    res.status(401);
  }
})

router.delete("/all", async (req, res) => {
  try {
    let data = await missionModel.deleteMany({});
    res.json(data); 
  }
  catch (err) {
    res.status(401).json({msg:"problem"});
  }
})

module.exports = router;