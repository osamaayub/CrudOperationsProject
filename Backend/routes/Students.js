const Express = require('express');
const router = Express.Router();

const {
    CreateStudent,
    getStudents,
    getStudent,
    UpdateStudent,
    DeleteStudent,
} = require('../controllers/StudentController');





//get all student
router.get('/', getStudents)



//get single students

router.get('/:id', getStudent)




//create a new student
router.post('/', CreateStudent)



//Update a new Student
router.patch('/:id', UpdateStudent)



//Delete a Student

router.delete('/:id', DeleteStudent)


module.exports = router
