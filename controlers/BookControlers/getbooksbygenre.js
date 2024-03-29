const Book = require('../../models/BookSchema');

const getBooksbygenre= async (req, res) => {
    try {
        const book=await Book.find({ genre:req.params.name});
        if(!book) return res.status(404).send("No book found");
        res.json(book);
    }
    catch (err) {
        console.log(`Error in finding Books: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = getBooksbygenre;