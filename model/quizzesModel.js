const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);
const QuizzesSchema = new Schema({
    id: Number,
    name: { type: String, default: "Quiz Name" },
    description: { type: String, default: "This is a newly added quiz." },
    color: { type: String, default: "#cccc00" },
    published: { type: Boolean, default: false },
    private_: { type: Boolean, default: true },
    qbq: { type: Boolean, default: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    state: { type: String, default: "Closed" },
    adminsIds: [String],
    startTime: { type: String, default: Date.now }
});

QuizzesSchema.plugin(autoIncrement.plugin, { model: "Quizzes", field: "id" });
module.exports = Quizzes = mongoose.model('Quizzes', QuizzesSchema);

