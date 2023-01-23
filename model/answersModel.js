const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const AnswersSchema = new Schema({
    id: Number,
    answer: String,
    isCorrect: Boolean,
    fkQuestion: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Questions'
    }
});

AnswersSchema.plugin(autoIncrement.plugin, { model: "Answers", field: "id" });
module.exports = Answers = mongoose.model('Answers', AnswersSchema);
