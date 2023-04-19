import { Router } from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../controllers/orders.js';

const ordersRouter = Router();

ordersRouter.route('/')
    .get( getOrders)
    .post(createOrder);

ordersRouter.route('/:id')
    .get(getOrder)
    .put(updateOrder)
    .delete(deleteOrder);

export default ordersRouter;
