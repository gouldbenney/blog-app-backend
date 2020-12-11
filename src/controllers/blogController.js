const Blog = require('../models/blog')

const BlogController = {}

BlogController.addPost = async (req, res) => {
    try{
        let blog = new Blog(req.body)
        let result = await blog.save()
        res.status(201).send({message: 'Blog created', result})
    } catch (error) {
        console.log(error)
    }
}

BlogController.getPosts = async  (req, res) => {
    
    try {
        let blog = await Blog.find({title: req.params.title})
        blog ? res.status(200).send({message: 'Blog available', blog}) : res.status(400).send({message: 'Blog unavailable'})
        } catch (error) {
            console.log(error)
        }
    }

    //Update Blog
    BlogController.updateBlog = async (req,res) => {

        //destructuring User Detail
        const {title,body, social, author, like, dislike} = req.body
    try {
        let blog= await Blog.findOneAndUpdate(
            {_id: req.params.id},
            {title, body,social, author, like, dislike} 
        )
        if(blog){
            res.status(200).send({message: 'Blog updated successfully', blog })
        }else {
            res.status(400).send({message: 'Could not update blog'})
    }
    } catch (error) {
        console.log(error)
    }
}

//Deleting Blog
BlogController.deleteBlog = async ( req,res ) => {
    try {
        let blog= await Blog.findOneAndDelete({_id: req.params.id})
        if(blog){
            res.status(200).send({message: 'Blog deleted successfully'})
        }else{
            res.status(400).send({message: 'Could not delete blog'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = BlogController