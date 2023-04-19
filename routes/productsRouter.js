import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/products.js';

const productsRouter = Router();

productsRouter.route('/')
    .get(getProducts)
    .post(createProduct);

productsRouter.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

export default productsRouter;
