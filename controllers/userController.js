const db = require('../models')
const User = db.User
const User_section = db.User_section

const userController = {
  getUser: (req, res) => {
    const UserId = req.params.userId
    User.findByPk(UserId)
      .then(user => {
        return res.json({ status: 'success', data: user })
      })
      .catch(error => {
        console.log('error', error)
        return res.json({ status: 'error', error: error })
      })
  }
}

module.exports = userController
