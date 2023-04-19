/* 
REST = REpresentational State Transfer
API = Application Programming Interface
HTTP = Hyper Text Transfer Protocol
    [x] Uniform interface
        Routes for HTTP verbs
        Standardized actions (calls)
        Response type
    [x] Client-server
    [x] Stateless
    [x] Cacheable
*/
import express from 'express';
import ordersRouter from './routes/ordersRouter.js';
import productsRouter from './routes/productsRouter.js';
import errorHandler from './middlewares/errorHandler.js';

const port = process.env.PORT || 8000;
const app = express();

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
