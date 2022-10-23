const db = require('../models')
const Project = db.Project
const Project_section = db.Project_section

const projectController = {
  getProjects: (req, res) => {
    const UserId = req.params.userId
    Project.findAll({ where: { UserId: UserId }, raw: true, nest: true })
      .then(projects => {
        return res.json({ status: 'success', data: projects })
      })
      .catch(error => {
        console.log('error', error)
        return res.json({ status: 'error', error: error })
      })
  },
  getProject: (req, res) => {
    const ProjectId = req.params.projectId
    Project.findOne({ where: { id: ProjectId }, raw: true, nest: true })
      .then(project => {
        return res.json({ status: 'success', data: project })
      })
      .catch(error => {
        console.log('error', error)
        return res.json({ status: 'error', error: error })
      })
  }
}

module.exports = projectController
