var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NotesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
  // url: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  // scrapeTime: {
  //   type: Date
  // },
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Comment"
  //   }
  // ]
});

// Create model using defined schema
var Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;