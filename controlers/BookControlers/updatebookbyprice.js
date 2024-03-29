const Book = require('../../models/BookSchema');

const updatebookbyprice = async (req, res) => {
    try {
        const bookname = req.params.bookname;
        const updateprice = req.body.price;
        const book = await Book.findOne({ book_name: bookname });

        if (!book) return res.status(400).json({ msg: "No Book Found" });
        book.price=updateprice;
        await book.save();

        res.status(200).json({ message: `${book.book_name} has been updated successfully` })
    }
    catch (err) {
        console.log(`Error in updating Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = updatebookbyprice;