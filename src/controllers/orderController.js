import { Order } from "../models/order.js";

export const createOrder = (req, res) => {
  const { memberId, items } = req.body;
  const newOrder = new Order(memberId, items);

  if (newOrder.isValid()) {
    newOrder.save();
    res.status(201).json(newOrder);
  } else {
    res.status(400).json({ error: "Invalid order data" });
  }
};

export const getOrder = (req, res) => {
  const orderId = req.params.id;
  const order = Order.findById(orderId);

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ error: "Order not found" });
  }
};
