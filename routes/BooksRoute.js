const express = require('express')
const addBooks = require('../controlers/BookControlers/addBooks');
const deleteBooks = require('../controlers/BookControlers/deleteBooks');
const getBooksbyname = require('../controlers/BookControlers/getBooks');
const getBooksbygenre = require('../controlers/BookControlers/getbooksbygenre');
const priceget10 = require('../controlers/BookControlers/priceget10');
const router = express.Router();

router.post("/addbooks" , addBooks);

router.delete("/removebook/:id" , deleteBooks);
router.get("/getBooksbyname/:name" , getBooksbyname);
router.get("/getBooksbygenre/:name" , getBooksbygenre);
router.get("/getbookbypriceget10" , priceget10);





module.exports = router;