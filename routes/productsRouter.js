import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', createProduct);
productsRouter.get('/:id', getProduct);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;
