const mongoose = require('mongoose');
const schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const RespondsSchema = new schema({
    responded: { type: Boolean, default: false },
    fkQuiz: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Quizzes"
    },
    fkQuestion: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Questions"
    },
    fkUser: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    }
});

//RespondsSchema.plugin(autoIncrement.plugin, { model: "Responds", field: "id" });
module.exports = Responds = mongoose.model('Responds', RespondsSchema);

