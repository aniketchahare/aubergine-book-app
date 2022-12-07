const model = require('../model');

module.exports = {
    addBook: addBook,
    updateBook: updateBook,
    deleteBook: deleteBook,
    getBook: getBook
}

async function addBook(data) {
    try {
        const result = await model.createBook(data);
        // console.log(result);
        if (!result) {
            throw "Something went wrong"
        }

        return result;
    } catch (e) {
        throw new Error('Something went wrong')
    }
}

async function updateBook(data) {
    try {
        const result = await model.updateBook(data);
        // console.log(result);
        if (!result) {
            throw "Something went wrong"
        }
        if (result.noData) return { message: 'Book id is not available.' }
        return { result: result, message: 'Book updated successfully' };
    } catch (e) {
        throw new Error('Something went wrong')
    }
}

async function deleteBook(data) {
    try {
        const result = await model.deleteBook(data);
        // console.log(result);
        if (!result) {
            throw "Something went wrong"
        }

        if (result.noData) return { message: 'Book id is not available.' }
        return { result: result, message: 'Book deleted successfully' };
    } catch (e) {
        throw new Error('Something went wrong')
    }
}

async function getBook() {
    try {
        const result = await model.getBook();
        // console.log(result);
        if (!result) {
            throw "Something went wrong"
        }

        return result;
    } catch (e) {
        throw new Error('Something went wrong')
    }
}