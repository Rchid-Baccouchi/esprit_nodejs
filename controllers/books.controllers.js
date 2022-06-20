const books = require ('../models/book.model')


const AddBook = async(req,res)=>{
    try {
        await books.create(req.body)
        res.status(201).json({message:'Book added successfully'})
    } catch (error) {
        console.log(error.message);
    }
}

const FindAllBooks = async(req,res)=>{
    try {
    const result = await books.find()
    res.status(201).json(result)
    } catch (error) {
        console.log(error.message);
    }
}

const FindBook = async(req,res)=>{
    try {
        const result = await books.findOne({_id: req.params.id})
        res.status(201).json(result)
        } catch (error) {
            console.log(error.message);
        }
}

const DeleteBook = async(req,res)=>{
    try {
        await books.findByIdAndRemove({_id: req.params.id})
        res.status(201).json('Book deleted successfully')
        } catch (error) {
            console.log(error.message);
        }

}

const UpdateBook = async(req,res)=>{
    try {
        const result = await books.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {new:true}
            )
        res.status(201).json(result)
        } catch (error) {
            console.log(error.message);
        }

}

module.exports={
    AddBook,
    FindAllBooks,
    FindBook,
    DeleteBook,
    UpdateBook
}