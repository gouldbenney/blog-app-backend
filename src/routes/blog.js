const router= require('express').Router()

const {addPost, getPost, updateBlog, deleteBlog} = require('../controllers/blogController')


//Creating Post
router.post('api/newblog', addPost)

//Retrieving Posts
router.get('api/blogs', getPosts)

//Updating Blog ControllerRouter
router.patch('api/update-blog', updateBlog)

//Deleting a Blog
router.delete('api/delete-blog', deleteBlog)

module.exports = router