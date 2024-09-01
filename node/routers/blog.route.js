import express from 'express';
import { createBlog, deleteBlog, getAllBlog, getSingleBlog, updateBlogs } from '../controllers/blog.controller.js';
import upload from '../middleware/multerconfig.js';


const router = express.Router();

router.post('/blog', upload.single('blog_img'),createBlog);
router.get('/blog', getAllBlog);
router.get('/blog/:id', getSingleBlog);
router.put('/blog/:id', updateBlogs);
router.delete('/blog/:id', deleteBlog);

export default router