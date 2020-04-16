const express = require('express')
const router = express.Router()
const Course = require('../models/Course')

// findAll
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses)
    } catch(err) {
        res.json({ msg: err })
    }
})

// findById
router.get('/:id', async (req, res) => {
    const courseId = req.params.id
    try {
        const course = await Course.findById(courseId)
        res.json(course)
    } catch(err) {
        res.json({ msg: err })
    }
})

// save
router.post('/', async (req, res) => {
    const course = new Course({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })

    try {
        const savedCourse = await course.save()
        res.json(savedCourse)
    } catch(err) {
        res.json({ msg: err })
    }
})

// delete
router.delete('/:id', async (req, res) => {
    const courseId = req.params.id
    try {
        const removedCourse = await Course.remove({ _id: courseId })
        res.json(removedCourse)
    } catch(err) {
        res.json({ msg: err })
    }
})

// update course name by id
router.patch('/:id', async (req, res) => {
    const courseId = req.params.id
    const courseName = req.body.name
    try {
        const updatedCourse = await Course.updateOne(
            { _id: courseId }, 
            { $set: { title: courseName } }
        )
        res.json(updatedCourse)
    } catch(err) {
        res.json({ msg: err })
    }
})

module.exports = router