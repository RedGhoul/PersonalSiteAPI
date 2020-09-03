const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    tag_line: String,
    url_github: String,
    url_live:String,
    can_show: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Project', ProjectSchema);