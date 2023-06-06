const { Book } = require('../models/Book.js');


const bookController = {
    getAll: (req, res) => {
        // let limitProduct = req.query.limit;
        Book.find()
            .populate("writer")
            // .select("name unitPrice stock")
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    getById: (req, res) => {

        let id = req.params.id

        Book.findById(id).populate("writer")
            .then(data => {
                if (data)
                    res.json(data)
                else
                    res.status(404).json({});
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {

        let book = new Book({
            name: req.body.name,
            description: req.body.description,
            publishDate: req.body.publishDate,publishDate
            // imagePath:
            writer: req.body.writer,
            addDate: req.body.addDate,
        })
        book.save()
        res.json(book)
    },
    // getAllByCategoryId: (req, res) => {
    //     let id = req.params.id

    //     Product.find({ "category": id }).populate("category")
    //         .then(data => {
    //             res.json(data)
    //         })
    //         .catch(err => {
    //             res.status(500).json(err)
    //         })
    // },
    delete: (req, res) => {
        
        let id = req.params.id;

        Book.findByIdAndDelete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    bookController
}