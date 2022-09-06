const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema


const StudentSchema = new Schema({
    Name: {
        type: String,
        required: true

    },
    Gender: {
        type: String,
        required: true

    },
    pob: {
        type: String,
        required: true
    }
    , Groups:
    {
        type: Array,
        required: true

    }

}, { timestamps: true })



module.exports = mongoose.model('Student', StudentSchema)
