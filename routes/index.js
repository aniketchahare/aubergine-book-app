const express = require('express');
const routes = express.Router();

const controller = require('../controller')

routes.post('/add-book', controller.addBook)
routes.patch('/update-book', controller.updateBook)
routes.delete('/delete-book', controller.deleteBook)
routes.get('/book', controller.getBook)

module.exports = routes;