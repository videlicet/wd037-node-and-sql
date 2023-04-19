import db from '../db/index.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getProducts = async (req, res, next) => {
  try {
    const { rowCount, rows } = await db.query('SELECT * FROM products;');
    if (!rowCount) throw new ErrorResponse('No products', 404);
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const {
      body: { name, description, stock, price }
    } = req;
    const {
      rows: [newProduct]
    } = await db.query(`INSERT INTO products(name, description, stock, price) VALUES($1, $2, $3, $4) RETURNING *`, [
      name,
      description,
      stock,
      price
    ]);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const {
      params: { id }
    } = req;
    const {
      rowCount,
      rows: [product]
    } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    if (!rowCount) throw new ErrorResponse(`Product with id of ${id} does not exist`, 404);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = (req, res) => {
  res.json({ msg: 'PUT a product' });
};

export const deleteProduct = (req, res) => {
  res.json({ msg: 'DELETE a product' });
};
