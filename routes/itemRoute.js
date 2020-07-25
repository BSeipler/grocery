const express = require('express')
const Item = require('./../models/itemModel')
const itemController = require('./../controllers/itemController')

const {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
  getItem
} = itemController

const router = express.Router()

router.get('/', getAllItems)

router.post('/', createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)

router.get('/:id', getItem)

module.exports = router
