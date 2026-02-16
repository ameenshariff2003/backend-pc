const mongoose = require("mongoose")

const userNotes = new mongoose.Schema({
    title:String,
    desc:String
})

module.exports = mongoose.model("Notes",userNotes);

