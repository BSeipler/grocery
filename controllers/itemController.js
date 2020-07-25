const Item = require('./../models/itemModel')

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find()
    res.json({
      items
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.createItem = async (req, res) => {
  try {
    await Item.create(req.body)
    res.json({
      message: 'Item Created'
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.updateItem = async (req, res) => {
  try {
    await Item.updateOne({ _id: req.params.id }, req.body)
    res.json({
      message: 'Item Updated'
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.deleteItem = async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.id })
    res.json({
      message: 'Item Deleted'
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    res.json({
      item
    })
  } catch (error) {
    console.log(error.message)
  }
}
