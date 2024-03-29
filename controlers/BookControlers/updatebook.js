const Book = require('../../models/BookSchema');

const updatebook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updateBook = req.body;
        const book = await Book.findByIdAndUpdate(bookId, updateBook, { new: true });

        if (!book) return res.status(400).json({ msg: "No Book Found" });

        res.status(200).json({ message: `${book.book_name} has been updated successfully` })
    }
    catch (err) {
        console.log(`Error in updating Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = updatebook;