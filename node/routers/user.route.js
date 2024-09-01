import express from 'express';
import { createUser, deleteAllUser, deleteUser, getAllUsers, getSingleUser, updateUsers } from '../controllers/user.controller.js';
// import { createUser } from '../controllers/user.controller.js';
import upload from '../middleware/multerconfig.js';

const router = express.Router()

router.post ("/user",upload.single('profile') ,createUser)
router.get ("/user", getAllUsers)
router.get ("/user/:id", getSingleUser)
router.put ("/user/:id", updateUsers)
router.delete ("/user/:id", deleteUser)
router.delete("/user", deleteAllUser)


export default router;