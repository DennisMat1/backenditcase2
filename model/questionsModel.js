const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const QuestionsSchema = new Schema({
    id: Number,
    question: String,
    timeLimit: Number,
    pointsType: String,
    score: Number,
    description: String,
    fkQuiz: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Quizzes"
    }
});

QuestionsSchema.plugin(autoIncrement.plugin, { model: "Questions", field: "id" });
module.exports = Questions = mongoose.model('Questions', QuestionsSchema);