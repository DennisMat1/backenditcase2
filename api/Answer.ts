const express = require("express");
const app = express.Router();
const Answers = require("../model/answersModel")


app.route("/get/answers").get(async (req: any, res: any) => {
  let x = await Answers.find();
  res.send(x);
});

app.route("/get/answers/:id").get(async (req: any, res: any) => {
  let x = await Answers.find({ fkQuestion: req.params.id });
  res.send(x)
});

app.route("/create/answers").post(async (req: any, res: any) => {
  req.body.forEach(async (item: any) => {
    const answer = new Answers({
      _id: item._id,
      answer: item.answer,
      isCorrect: item.isCorrect,
      fkQuestion: item.fkQuestion
    })
    await answer.save();
  });
  res.send('response')
});

app.route("/update/answers").put(async (req: any, res: any) => {
  let myPromise = new Promise(function (myResolve, myReject) {
    req.body[0].forEach(async (filteredAnswer: any) => {
      await Answers.deleteOne({ _id: filteredAnswer._id });
    });
    myResolve("OK");
    myReject("Error");
  });

  myPromise
    .then(r => {
      req.body[1].forEach(async (dataAnswers: any) => {
        const answer = new Answers({
          _id: dataAnswers._id,
          answer: dataAnswers.answer,
          isCorrect: dataAnswers.isCorrect,
          fkQuestion: dataAnswers.fkQuestion
        })
        await answer.save();
      })
    }
    )
    .then(r => res.send('response'))
});

app.route("/delete/answers/:id").delete(async (req: any, res: any) => {
  await Answers.deleteMany({ fkQuestion: req.params.id })
  res.send('response')
});


module.exports = app;
export { };
