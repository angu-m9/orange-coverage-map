import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  checkUser,
} from '../controllers/userController';

const router = express.Router();

// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getAllUsers);

// Get a single user by ID
router.get('/users/:userId', getUserById);

// Update a user by ID
router.put('/users/:userId', updateUser);

// Delete a user by ID
router.delete('/users/:userId', deleteUser);

// Register the User and add coookie
router.post('/register', registerUser);

//Check/Verify if the user has a cookie
router.post('/check', checkUser);

export default router;
