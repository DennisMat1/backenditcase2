//const express = require("express");
import express from "express";
const app = express.Router();
const mongoose = require("mongoose");
const Question = require("../model/questionsModel");

// mongoose.connect("mongodb+srv://Ventigrate-GroepA:itcase2022@ventigrate.ekxtpls.mongodb.net/ITCase?retryWrites=true&w=majority");

app.route("/get/questions").get(async (req: any, res: any) => {
    let a = await Question.find();
    res.send(a)
})

app.route("/create/question").post(async (req: any, res: any) => {
    const question = new Question({
        _id: req.body._id,
        id: req.body._id, //is niet meegegeven met frontend, niet nodig? req.body._id
        question: req.body.question,
        timeLimit: req.body.timeLimit,
        pointsType: req.body.pointsType,
        score: req.body.score,
        description: req.body.description,
        fkQuiz: req.body.fkQuiz
    })
    await question.save();
    res.send('response')
});

app.route("/update/question").put(async (req, res) => {
    await Question.updateOne({ _id: req.body._id }, {
        $set: {
            _id: req.body._id,  //is meegegeven met frontend
            id: req.body.id, //is niet meegegeven met frontend, niet nodig? req.body._id => nu wel meegegeven
            question: req.body.question,
            timeLimit: req.body.timeLimit,
            pointsType: req.body.pointsType,
            score: req.body.score,
            description: req.body.description,
            fkQuiz: req.body.fkQuiz
        }
    })
    res.send('response')
});

app.route("/update/order").put(async (req, res) => {
    await Question.deleteMany({ fkQuiz: req.body[0].fkQuiz });
    await Question.insertMany(req.body);
    res.send('response')
});


app.route("/delete/question/:id").delete(async (req: any, res: any) => {
    await Question.deleteOne({ _id: req.params.id })
    res.send('response')
});


export { }
module.exports = app;