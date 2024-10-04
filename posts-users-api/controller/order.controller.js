const db = require("../db");
class OrderController {
  async createOrder(req, res) {
    const { title, user_id, status, total } = req.body;
    const newPost = await db.query(
      `INSERT INTO order_table (title, user_id, status, total) VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, user_id, status, total]
    );
    res.json(newPost.rows[0]);
  }

  async getOrdersByUser(req, res) {
    const { id } = req.query;
    const getPosts = await db.query(
      `SELECT title, content FROM order_table WHERE user_id=$1`,
      [id]
    );
    res.json(getPosts.rows);
  }

  async getAllOrders(req, res) {
    const allOrders = await db.query(`SELECT * FROM order_table`);
    res.json(allOrders.rows);
  }

  async getOrderById(req, res) {
    const { id } = req.params;
    const order = await db.query(`SELECT * FROM order_table WHERE id = $1`, [
      id,
    ]);
    res.json(order.rows[0]);
  }

  async updateOrder(req, res) {
    const { id } = req.params;
    const { title, user_id, status, total } = req.body;
    const updatedOrder = await db.query(
      `UPDATE order_table SET title = $1, user_id = $2, status = $3, total = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *`,
      [title, user_id, status, total, id]
    );
    res.json(updatedOrder.rows[0]);
  }

  async deleteOrder(req, res) {
    const { id } = req.params;
    await db.query(`DELETE FROM order_table WHERE id = $1`, [id]);
    res.json({ message: "Order deleted successfully" });
  }
}

module.exports = new OrderController();
