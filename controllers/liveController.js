const db = require('../models')
const Live = db.Live
const Live_section = db.Live_section

const liveController = {
  getLives: (req, res) => {
    const UserId = req.params.userId
    Live.findAll({ where: { UserId: UserId }, raw: true, nest: true })
      .then(lives => {
        return res.json({ status: 'success', data: lives })
      })
      .catch(error => {
        console.log('error', error)
        return res.json({ status: 'error', error: error })
      })
  },
  getLive: (req, res) => {
    const LiveId = req.params.liveId
    Live.findOne({ where: { id: LiveId }, raw: true, nest: true })
      .then(live => {
        return res.json({ status: 'success', data: live })
      })
      .catch(error => {
        console.log('error', error)
        return res.json({ status: 'error', error: error })
      })
  }
}

module.exports = liveController
