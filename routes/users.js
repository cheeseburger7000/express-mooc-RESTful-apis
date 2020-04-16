const express = require('express')
const router = express.Router()
const Joi = require('joi')

const users = [
    { id: 1, name: 'James' },
    { id: 2, name: 'Codey' },
    { id: 3, name: 'Mike '}
]

router.get('/', (req, res) => {
    res.send(users)
})

router.get('/:id', (req, res) => {
    const userId = req.params.id
    const user = users.find(user => user.id === parseInt(userId))
    if (!user) return res.status(404).send('The user with the given ID was not found.')
    
    res.send(user)
})

router.post('/', (req, res) => {
    const { error } = validateUser(req.body)
    if (error)  return res.status(400).send(error.details[0].message)
    
    const user = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(user)
    res.send(user)
})

router.put('/:id', (req, res) => {
    const userId = req.params.id
    const user = users.find(user => user.id === parseInt(userId))
    if (!user) return res.status(404).send('The user with the given ID was not found.')
    
    const { error } = validateUser(req.body)
    if (error)  return res.status(400).send(error.details[0].message)
    
    user.name = req.body.name
    res.send(user)
})

router.delete('/:id', (req, res) => {
    const userId = req.params.id
    const user = users.find(user => user.id === parseInt(userId))
    if (!user) return res.status(404).send('The user with the given ID was not found.')
    
    const targetIndex = users.indexOf(user)
    users.splice(targetIndex, 1)

    res.send(user)
})

function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(user, schema)
}

module.exports = router