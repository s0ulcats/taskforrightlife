import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/users.js';

const router = new Router();

router.get('/', getAllUsers);
router.post('/', createUser);

export default router;