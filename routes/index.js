const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()

const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const liveController = require('../controllers/liveController')
const adminController = require('../controllers/adminController')

router.get('/', (req, res) => {
  res.send('test home page')
})

router.get('/api/user/:userId', userController.getUser)

router.get('/api/projects/:userId', projectController.getProjects)
router.get('/api/project/:projectId', projectController.getProject)

router.get('/api/lives/:userId', liveController.getLives)
router.get('/api/live/:liveId', liveController.getLive)

router.put('/api/admin/user/:userId', upload.array('files', 2), adminController.putUser)
router.put('/api/admin/project/:projectId', upload.array('files', 2), adminController.putProject)
router.put('/api/admin/live/:liveId', upload.array('files', 2), adminController.putLive)

module.exports = router
