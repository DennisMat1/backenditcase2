const express = require("express");
const router = express.Router();
const Quizzes = require("../model/quizzesModel");


router.route("/get/quizzes").get(async (req: any, res: any) => {
  let a = await Quizzes.find();
  res.send(a)
});

router.route("/get/quizzes/:chosenquiz").get(async (req: any, res: any) => {
  let a = await Quizzes.findOne({ _id: req.params.chosenquiz });
  res.send(a)
});

//module.exports = router;

//******* */

const Quiz = require("../model/quizzesModel")

router.post("/get", (req: any, res: any) => {
  const { id, userId } = req.body;
  if (id) {
    Quiz.findOne({ id })
      .then((quiz: any) => {
        if (quiz) {
          res.send({
            status: "SUCCESS",
            message: "Quiz has been fetched.",
            quiz,
          });
        } else {
          res.send({
            status: "FAILED",
            message: "Quiz with ID doesn't exist.",
          });
        }
      })
      .catch(() => {
        res.send({
          status: "FAILED",
          message: "Error while fetching quiz.",
        });
      });
  } else if (userId) {
    Quiz.find({ adminsIds: userId })
      .then((quizes: any) => {
        if (quizes) {
          res.send({
            status: "SUCCESS",
            message: "Quizes has been fetched.",
            quizes,
          });
        } else {
          res.send({
            status: "FAILED",
            message: "Quizes by ID doesn't exist.",
          });
        }
      })
      .catch(() => {
        res.send({
          status: "FAILED",
          message: "Error while fetching quiz.",
        });
      });
  } else {
    res.send({
      status: "FAILED",
      message: "Required parameters are not provided.",
    });
  }
});

router.post("/create", (req: any, res: any) => {
  const { userId } = req.body;
  if (userId) {
    const quiz = new Quiz({
      adminsIds: [userId],
    });
    quiz
      .save()
      .then((quizR: any) => {
        res.send({
          status: "SUCCESS",
          message: "Quiz has been created.",
          quiz: quizR
        });
      })
      .catch(() => {
        res.send({
          status: "FAILED",
          message: "Error while creating quiz.",
        });
      });
  } else {
    res.send({
      status: "FAILED",
      message: "Required parameters are not provided.",
    });
  }
});

router.post("/update", (req: any, res: any) => {
  const { id, name, description, color, published, private_, qbq } = req.body;
  Quiz.findOneAndUpdate({ id }, { name, description, color, published, private_, qbq }).then((quiz: any) => {
    console.log("Updated");
    res.send({
      status: "SUCCESS",
      message: "Quiz has been updated.",
      quiz
    });
  }).catch(() => {
    res.send({
      status: "FAILED",
      message: "Error while updating quiz.",
    });
  })
});

router.route("/update/waitingtime").put(async (req: any, res: any) => {
  await Quiz.updateOne({ _id: req.body._id }, { $set: { startTime: req.body.startTime } });
  res.send('response');
})


module.exports = router
