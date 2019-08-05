const router = require('express').Router()

router.get('/api', (req, res) => {
  res.json({
    message: 'success'
  })
})

module.exports = router
