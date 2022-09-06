const Students = require('../models/StudentModel')
const mongoose = require('mongoose')


//get all Students

const getStudents = async (req, res) => {
    const students = await Students.find({}).sort({ createdAt: -1 })
    res.json(200).json(Students)
}

//get a single  Student

const getStudent = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such Student found' })

    }
    const student = await Workouts.findById(id)
    if (!student) {
        res.status(404).json({ error: 'No such Student found' })
    }
    res.status(200).json(student)

}
//create a new Student
const CreateStudent = async (req, res) => {
    const { Name, Gender, pob, Groups } = req.body
    //add doc to the db
    try {
        const student = await Students.create({ Name, Gender, pob, Groups });
        res.status(200).json(student);

    }
    catch (error) {

        res.status(400).json({ error: error.message });
    }
}

//update a Student

const UpdateStudent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }

    const student = await Students.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!student) {
        return res.status(400).json({ error: 'No such student' })
    }

    res.status(200).json(student)
}


//delete a Student

const DeleteStudent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such student' })
    }

    const student = await Students.findOneAndDelete({ _id: id })

    if (!student) {
        return res.status(400).json({ error: 'No such Student' })
    }

    res.status(200).json(student)

}


module.exports = {
    getStudent,
    getStudents,
    CreateStudent,
    UpdateStudent,
    DeleteStudent
}
