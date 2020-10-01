const express = require("express");
const router = express.Router();

const initialStudents = require("../data/initialStudents");
const Student = require("../models/Student");

// get students
router.get("/", async (req, res) => {
    const students = await Student.find().sort("name")
    res.status(200).json(students);
});

//populate database with initial students 
router.post('/init', (req, res) => {
    let newStudent;

    try {
        initialStudents.map( async student => {
          newStudent = new Student(student)
          await newStudent.save();
          if(!newStudent) throw Error(`Something went wrong with saving student named ${student.firstName}`)
          res.status(200).json(newStudent);
        })
    } catch(e) {
        res.status(400).json({ msg: e.message });
    }
});


module.exports = router;