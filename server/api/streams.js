const router = require('express').Router()
const {Streams} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allStreams = await Streams.findAll()
    res.json(allStreams).status(200)
  } catch (error) {
    console.log(error)
  }
})
router.get('/:id', async (req, res, next) => {
  try {
    const singleStream = await Streams.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(singleStream).status(201)
  } catch (error) {
    console.log(error)
  }
})
router.post('/', async (req, res, next) => {
  try {
    const newStream = await Streams.create({
      title: req.body.title,
      description: req.body.description
    })
    res.json(newStream).status(201)
  } catch (error) {
    next(error)
  }
})
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const streamId = await Streams.findByPk(req.params.id)
    if (!streamId) return res.sendStatus(404)
    const remove = await Streams.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
})
router.put('/update/:id', async (req, res, next) => {
  try {
    const streamId = await Streams.findByPk(req.params.id)
    if (!streamId) return res.sendStatus(404)
    const update = await streamId.update({
      title: req.body.title,
      description: req.body.description
    })
  } catch (error) {
    console.log(error)
  }
})
