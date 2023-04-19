// Here you will need to import an eventual Product model

export const getProducts = (req, res) => {
  res.json({ msg: 'GET all products' });
};

export const createProduct = (req, res) => {
  res.json({ msg: 'POST a product' });
};

export const getProduct = (req, res) => {
  res.json({ msg: 'GET a product' });
};

export const updateProduct = (req, res) => {
  res.json({ msg: 'PUT a product' });
};

export const deleteProduct = (req, res) => {
  res.json({ msg: 'DELETE a product' });
};
