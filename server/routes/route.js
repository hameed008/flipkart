import express from 'express'
import { userSignup, userLogin } from '../controller/user-Controller.js';
import { getProducts } from '../controller/product-Controller.js';
import { serverTest } from '../controller/test-Controller.js';
const router = express.Router()

router.get('/', serverTest);
router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get("/products", getProducts)

export default router