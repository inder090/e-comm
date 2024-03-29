const Book = require('../../models/BookSchema');

const priceget10 = async (req, res) => {
    try {
        const book = await Book.find({ price: { $gt: 10, $lt: 15 } });
        if (!book) return res.status(404).send("No book found");
        res.json(book);
    }
    catch (err) {
        console.log(`Error in finding Books: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = priceget10;