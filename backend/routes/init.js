const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

const initStudents = [
  {firstName: "John", lastName: "Doe", age: 24, nationality: "English"},
  {firstName: "Jan", lastName: "Dewaele", age: 27, nationality: "Belgian"},
  {firstName: "Jonathan", lastName: "Van Driessen", age: 33, nationality: "Belgian"},
  {firstName: "Anthony", lastName: "Lamot", age: 30, nationality: "Belgian"},
  {firstName: "Tim", lastName: "Ferris", age: 36, nationality: "American"},
  {firstName: "Melinda", lastName: "Gates", age: 63, nationality: "American"},
  {firstName: "Jan", lastName: "De Hollander", age: 13, nationality: "Dutch"},
  {firstName: "Maarten", lastName: "De Vriendt", age: 47, nationality: "Dutch"},
  {firstName: "Furkan", lastName: "Kursun", age: 23, nationality: "Turkish"}
]

//populate database with initial students 
router.post('/', (req, res) => {
  let newStudent;
  initStudents.map( async student => {
    newStudent = new Student(student)
    await newStudent.save();
    res.send(newStudent)
  })
});

module.exports = router;