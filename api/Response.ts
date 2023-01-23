const express = require("express");
const router = express.Router();
const Responds = require("../model/respondsModel")


router.route("/get/responds").get(async (req: any, res: any) => {
  let a = await Responds.find();
  res.send(a)
})

router.route('/update/respond').put(async (req: any, res: any) => {
  await Responds.updateOne({
    fkUser: req.body.fkUser,
    fkQuestion: req.body.fkQuestion //en vraag is question!!
  },
    {
      $set: {
        responded: req.body.responded,
        fkQuiz: req.body.fkQuiz,
        fkQuestion: req.body.fkQuestion,
        fkUser: req.body.fkUser
      }
    },
    { upsert: true }
  );
  res.send('response')
})

router.route('/delete/allresponds').put(async (req: any, res: any) => {
  await Responds.deleteMany({ fkQuiz: req.body._id });
  res.send('response')
})


module.exports = router;
export { }