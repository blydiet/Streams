const router = require('express').Router()
const {Streams} = require('../db/models')
module.exports = router

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
