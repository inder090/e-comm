const Book = require('../../models/BookSchema');

const updatebookbyauthor = async (req, res) => {
    try {
        const bookId = req.params.author;
        const updateBook = req.body;
        const book = await Book.findOneAndUpdate({ author: bookId }, updateBook, { new: true });

        if (!book) return res.status(400).json({ msg: "No Book Found" });

        res.status(200).json({ message: `${book.author} has been updated successfully` })
    }
    catch (err) {
        console.log(`Error in updating Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = updatebookbyauthor;