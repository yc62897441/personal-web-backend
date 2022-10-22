const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const liveController = require('../controllers/liveController')

router.get('/', (req, res) => {
  res.send('test home page')
})

router.get('/api/user/:userId', userController.getUser)

router.get('/api/projects/:userId', projectController.getProjects)

router.get('/api/lives/:userId', liveController.getLives)

module.exports = router
