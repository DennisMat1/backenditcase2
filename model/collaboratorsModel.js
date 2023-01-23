const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const CollaboratorsSchema = new Schema({
    id: Number,
    collaboratorName: String,
    participated: Boolean,
    fkQuiz: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "quizzes"
    }
});
//Een table aanmaken die overeen komet met die (collaboratorSchema) schema.
CollaboratorsSchema.plugin(autoIncrement.plugin, { model: "Collaborators", field: "id" });
module.exports = Collaborators = mongoose.model('Collaborators', CollaboratorsSchema);
