const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authMiddleware = require('../middleware/auth');

router.post("/books", authMiddleware, bookController.createBook);

router.get("/books", authMiddleware, bookController.getAllBooks);

router.get("/books/:id", authMiddleware, bookController.getBookById);

router.put("/books/:id", authMiddleware, bookController.updateBook);

router.delete("/books/:id", authMiddleware, bookController.deleteBook);

module.exports = router;
