const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const ScoresSchema = new Schema({
    score: { type: Number, default: 0 },
    fkQuiz: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "quizzes"
    },
    fkUser: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    }
});

module.exports = Scores = mongoose.model('Scores', ScoresSchema);
