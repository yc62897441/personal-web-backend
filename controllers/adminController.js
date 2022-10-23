const db = require('../models')
const User = db.User
const Project = db.Project
const Live = db.Live

const { ImgurClient } = require('imgur')
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID

const adminController = {
  putUser: (req, res) => {
    const UserId = req.params.userId

    // 如果有傳圖檔的話
    if (req.files) {
      // 傳送 avatar、banner 檔案給 imgur，可以兩個都有、一有一無，或兩個都沒有
      Promise.all(req.files.map(async (file) => {
        const encode_image = file.buffer.toString('base64')
        const client = new ImgurClient({ clientId: IMGUR_CLIENT_ID })

        // 傳 encode_image 給 imgur
        const response = await client.upload({
          image: encode_image,
          type: 'base64'
        })

        // 整理 imgur 回傳的圖片連結，存到 imgurLink
        const result = {
          'originalname': file.originalname,
          'imgurLink': response.data.link
        }

        return result
      }))
        .then((results) => {
          let avatar = null
          // 如果有更新 avatar，則 results 至少會有一個物件，將該物件中的 imgurLink 存到變數 avatar 中，等等再更新到資料庫內
          if (results.length > 0) {
            results.forEach(result => {
              if (result.originalname === 'avatar') {
                avatar = result.imgurLink
              }
            })
          }

          // 更新到資料庫
          User.findByPk(UserId)
            .then(user => {
              user.update({
                ...user,
                name: req.body.name,
                description: req.body.description,
                title_img: avatar
              })
                .then(() => {
                  return res.json({ status: 'success' })
                })
            })
            .catch(error => {
              return res.json({ status: 'error', error: error })
            })
        })
    } else {
      // 如果沒有傳圖檔的話
      // 更新到資料庫
      User.findByPk(UserId)
        .then(user => {
          user.update({
            ...user,
            name: req.body.name,
            description: req.body.description
          })
            .then(() => {
              return res.json({ status: 'success' })
            })
        })
        .catch(error => {
          return res.json({ status: 'error', error: error })
        })
    }
  },
  putProject: (req, res) => {
    const ProjectId = req.params.projectId

    // 如果有傳圖檔的話
    if (req.files) {
      // 傳送 avatar、banner 檔案給 imgur，可以兩個都有、一有一無，或兩個都沒有
      Promise.all(req.files.map(async (file) => {
        const encode_image = file.buffer.toString('base64')
        const client = new ImgurClient({ clientId: IMGUR_CLIENT_ID })

        // 傳 encode_image 給 imgur
        const response = await client.upload({
          image: encode_image,
          type: 'base64'
        })

        // 整理 imgur 回傳的圖片連結，存到 imgurLink
        const result = {
          'originalname': file.originalname,
          'imgurLink': response.data.link
        }
        return result
      }))
        .then((results) => {
          let avatar = null
          // 如果有更新 avatar，則 results 至少會有一個物件，將該物件中的 imgurLink 存到變數 avatar 中，等等再更新到資料庫內
          if (results.length > 0) {
            results.forEach(result => {
              if (result.originalname === 'avatar') {
                avatar = result.imgurLink
              }
            })
          }

          // 更新到資料庫
          Project.findByPk(ProjectId)
            .then(project => {
              project.update({
                ...project,
                name: req.body.name,
                description: req.body.description,
                title_img: avatar
              })
                .then(() => {
                  return res.json({ status: 'success' })
                })
            })
            .catch(error => {
              return res.json({ status: 'error', error: error })
            })
        })
    } else {
      // 如果沒有傳圖檔的話
      // 更新到資料庫
      Project.findByPk(ProjectId)
        .then(project => {
          project.update({
            ...project,
            name: req.body.name,
            description: req.body.description
          })
            .then(() => {
              return res.json({ status: 'success' })
            })
        })
        .catch(error => {
          return res.json({ status: 'error', error: error })
        })
    }
  },
  putLive: (req, res) => {
    const LiveId = req.params.liveId

    // 如果有傳圖檔的話
    if (req.files) {
      // 傳送 avatar、banner 檔案給 imgur，可以兩個都有、一有一無，或兩個都沒有
      Promise.all(req.files.map(async (file) => {
        const encode_image = file.buffer.toString('base64')
        const client = new ImgurClient({ clientId: IMGUR_CLIENT_ID })

        // 傳 encode_image 給 imgur
        const response = await client.upload({
          image: encode_image,
          type: 'base64'
        })

        // 整理 imgur 回傳的圖片連結，存到 imgurLink
        const result = {
          'originalname': file.originalname,
          'imgurLink': response.data.link
        }
        return result
      }))
        .then((results) => {
          let avatar = null
          // 如果有更新 avatar，則 results 至少會有一個物件，將該物件中的 imgurLink 存到變數 avatar 中，等等再更新到資料庫內
          if (results.length > 0) {
            results.forEach(result => {
              if (result.originalname === 'avatar') {
                avatar = result.imgurLink
              }
            })
          }

          // 更新到資料庫
          Live.findByPk(LiveId)
            .then(live => {
              live.update({
                ...live,
                name: req.body.name,
                description: req.body.description,
                title_img: avatar
              })
                .then(() => {
                  return res.json({ status: 'success' })
                })
            })
            .catch(error => {
              return res.json({ status: 'error', error: error })
            })
        })
    } else {
      // 如果沒有傳圖檔的話
      // 更新到資料庫
      Live.findByPk(LiveId)
        .then(live => {
          live.update({
            ...live,
            name: req.body.name,
            description: req.body.description
          })
            .then(() => {
              return res.json({ status: 'success' })
            })
        })
        .catch(error => {
          return res.json({ status: 'error', error: error })
        })
    }
  }
}

module.exports = adminController
