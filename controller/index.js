const services = require('../services');

module.exports = {
    addBook: addBook,
    updateBook: updateBook,
    deleteBook: deleteBook,
    getBook: getBook
}

async function addBook(req, res) {
    try {
        const result = await services.addBook(req.body);
        if (!result) {
            throw new Error("Something went wrong")
        }

        res.status(200).send({ status: 200, success: true, message: 'Book created successfully' })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function updateBook(req, res) {
    try {
        if (!req.body.bookId) {
            res.status(500).send('Bookid is required!!')
        }
        const result = await services.updateBook(req.body);
        if (!result) {
            throw new Error("Something went wrong")
        }

        res.status(200).send({ status: 200, success: true, message: result.message, payload: result.result })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function deleteBook(req, res) {
    try {
        if (!req.body.bookId) {
            res.status(500).send('Bookid is required!!')
        }
        const result = await services.deleteBook(req.body);
        if (!result) {
            throw new Error("Something went wrong")
        }

        res.status(200).send({ status: 200, success: true, message: result.message })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function getBook(req, res) {
    try {
        const result = await services.getBook();
        if (!result) {
            throw new Error("Something went wrong")
        }

        if (Array.isArray(result) && result.length === 0) {
            return res.status(200).send({ status: 200, success: true, message: 'No book available' })
        }
        res.status(200).send({ status: 200, success: true, message: 'Book fetched successfully', payload: result })
    } catch (err) {
        res.status(500).send(err.message)
    }
}