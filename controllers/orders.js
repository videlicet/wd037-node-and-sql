// Here you will need to import an eventual Order model

export const getOrders = (req, res) => {
  res.json({ msg: 'GET all orders' });
};

export const createOrder = (req, res) => {
  res.json({ msg: 'POST a order' });
};

export const getOrder = (req, res) => {
  res.json({ msg: 'GET a order' });
};

export const updateOrder = (req, res) => {
  res.json({ msg: 'PUT a order' });
};

export const deleteOrder = (req, res) => {
  res.json({ msg: 'DELETE a order' });
};
