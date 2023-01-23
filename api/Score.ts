const express = require("express");
const router = express.Router();
const Scores = require("../model/scoresModel.js");

router.route("/get/scores").get(async (req: any, res: any) => {
  let a = await Scores.find();
  res.send(a);
});

router.route("/update/scores").put(async (req: any, res: any) => {
  await Scores.updateOne(
    {
      fkQuiz: req.body.fkQuiz,
      fkUser: req.body.fkUser,
    },
    {
      $set: {
        score: req.body.score,
        //id: req.body.id
      },
    },
    { upsert: true }
  );
  res.send("response");
});

router
  .route("/delete/scores/:chosenquiz")
  .delete(async (req: any, res: any) => {
    await Scores.deleteMany({ fkQuiz: req.params.chosenquiz });
    res.send("response");
  });

module.exports = router;
export {};
