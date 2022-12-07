const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        enum: ['English', 'Hindi'],
    },
    releaseDate: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
});

const Book = mongoose.model("User", UserSchema);

module.exports = {
    createBook: createBook,
    updateBook: updateBook,
    deleteBook: deleteBook,
    getBook: getBook
}

async function createBook(data) {
    try {
        let book = new Book(data);
        const result = await book.save();
        if (result) {
            // console.log(result);
            return result;
        }
        return false
    } catch (error) {
        console.error("err in add model--> ", error);
        throw error;
    }
}

async function updateBook(data) {
    try {
        const book = await Book.findById(data.bookId).exec();
        if (!book) return { noData: true };

        let query = { $set: {} };
        for (let key in data) {
            if (book[key] && book[key] !== data[key]) {// if the field we have in data exists, we're gonna update it
                query.$set[key] = data[key];
            }
        }

        const updatedProduct = await Book.findByIdAndUpdate({ _id: data.bookId }, query, { new: true }).exec();

        if (!updatedProduct) return false;
        return updatedProduct;

    } catch (error) {
        console.error("err in add model--> ", error);
        throw error;
    }
}

async function deleteBook(data) {
    try {
        const book = await Book.findById(data.bookId).exec();
        if (!book) return { noData: true };

        const deletedProduct = await Book.findByIdAndDelete({ _id: data.bookId }).exec();

        if (!deletedProduct) return false;
        return deletedProduct;

    } catch (error) {
        console.error("err in add model--> ", error);
        throw error;
    }
}

async function getBook() {
    try {
        const product = await Book.find({}).exec();

        if (!product) return false;
        return product;

    } catch (error) {
        console.error("err in add model--> ", error);
        throw error;
    }
}