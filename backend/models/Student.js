const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: true
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
      },
    age: {
      type: Number,
      minlength: 1,
      maxlength: 3,
      required: true
    },
    nationality: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
      },  
  });
  
  const Student = mongoose.model('student', userSchema);
  
  module.exports = Student;