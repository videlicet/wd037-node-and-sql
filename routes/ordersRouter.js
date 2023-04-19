import { Router } from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../controllers/orders.js';

const ordersRouter = Router();

ordersRouter.get('/', getOrders);
ordersRouter.post('/', createOrder);
ordersRouter.get('/:id', getOrder);
ordersRouter.put('/:id', updateOrder);
ordersRouter.delete('/:id', deleteOrder);

export default ordersRouter;
