const mongoose = require('mongoose');

const WorkexperienceSchema = new mongoose.Schema({
    company_name: String,
    postion_name: String,
    date: String,
    comment: {
        type: [String],
        default: ['']
    },
    orderNumber: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    }
});

module.exports = mongoose.model('Workexperience', WorkexperienceSchema);
