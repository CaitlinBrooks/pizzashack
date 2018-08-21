const router = require('express').Router()
let Pizza = require('../models/Pizza')

//Get all or By ID Industry standard following REST conventions
router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    //FIND ALL
    Pizza.find({})
      .then(pizzas => {
        return res.send(pizzas)
      })
  }
  //FIND BY ID
  Pizza.findById(req.params.id)
    .then(pizza => {
      res.send(pizza)
    })
})

router.post('/', (req, res, next) => {
  let newPizza = req.body
  Pizza.create(newPizza)
    .then(pizza => {
      res.send(pizza)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  //Adding {new: true} causes return to be new object as opposed to old
  Pizza.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(newPizza => {
      res.send(newPizza)
    })
})

router.delete('/:id', (req, res, next) => {
  Pizza.findByIdAndRemove(req.params.id)
    .then(oldDeletedPizza => {
      res.send('DELORTED')
    })
})




module.exports = router