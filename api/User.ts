const express = require("express");
const router = express.Router();
const Users = require("../model/usersModel");
const mongoose = require("mongoose");

router.route("/get/users").get(async (req: any, res: any) => {
  let a = await Users.find();
  res.send(a);
});

router.route("/update/user").put(async (req: any, res: any) => {
  await Users.updateOne(
    {
      authId: req.body.authId,
    },
    {
      $set: {
        //id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        authId: req.body.authId,
      },
    },
    { upsert: true }
  );
  res.send("response");
});

router.route("/delete/users").delete(async (req: any, res: any) => {
  await Users.deleteMany({});
  res.send("response");
});

module.exports = router;
export {};
