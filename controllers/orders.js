import db from '../db/index.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getOrders = async (req, res, next) => {
  try {
    const { rowCount, rows } = await db.query('SELECT * FROM orders;');
    if (!rowCount) throw new ErrorResponse('No orders', 404);
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const {
      body: { id, price, date, user_id }
    } = req;
    const {
      rows: [newOrder]
    } = await db.query(`INSERT INTO orders (id, price, date, user_id) VALUES($1, $2, $3, $4) RETURNING *`, [
      id,
      price,
      date,
      user_id
    ]);
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const {
      params: { id }
    } = req;
    const {
      rowCount,
      rows: [order]
    } = await db.query('SELECT * FROM orders WHERE id = $1', [id]);
    if (!rowCount) throw new ErrorResponse(`Order with id of ${id} does not exist`, 404);
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = (req, res) => {
  res.json({ msg: 'PUT a order' });
};

export const deleteOrder =  async (req, res, next) => {
  try {
    const {
      params: { id }
    } = req;
    const {
      rowCount,
      rows: [order]
    } = await db.query('DELETE FROM orders WHERE id = $1', [id]);
    if (!rowCount) throw new ErrorResponse(`Order with id of ${id} does not exist`, 404);
    res.json(order);
  } catch (error) {
    next(error);
  }
};
