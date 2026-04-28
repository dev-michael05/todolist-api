const taskController = require('../controllers/taskController')
const taskSchema = require('../schemas/taskSchema')
const validate = require('../middlewares/validate')
const express = require('express')
const router = express.Router()

router.get('/',taskController.getAll)
router.get('/:id',taskController.getById)
router.post('/', validate(taskSchema), taskController.create)
router.put('/:id', validate(taskSchema), taskController.update)
router.delete('/:id',taskController.remove)

module.exports = router