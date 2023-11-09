const Book = require("../models/book");

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const {title, author} = req.body;
    const book = await Book.findOne({title,author})
    if(book){
        return res.status(400).send({
            msg: 'Book already exists'
        })
    }
    const user = req.user;
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        userId: user._id
    });

    await newBook.save();
    res.status(201).send({msg: 'Book added successfully'})
  } catch (error) {
    res.status(400).send({msg: "Something went wrong"});
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (books.length === 0) {
      return res.status(400).send({
          msg: 'No books found in the database'
      });
  }
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send({msg: "Something went wrong"});
  }
};

// Get a specific book by its ID
exports.getBookById = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).send({ msg: 'Book does not exist'});
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({msg: "Something went wrong"});
  }
};

// Update a book's details
exports.updateBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).send({ msg: 'Book does not exist'});
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({msg: "Something went wrong"});
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(bookId);
    if (!book) {
      return res.status(404).send({ msg: 'Book does not exist'});
    }
    res.status(204).send({ msg: 'Book deleted successfully'});
  } catch (error) {
    res.status(500).send({msg: "Something went wrong"});
  }
};
