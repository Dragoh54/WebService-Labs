const db = require("../db");

class UserController {
  async creatUser(req, res) {
    const { name, surname, email } = req.body;
    const newPerson = await db.query(
      `INSERT INTO person (name, surname, email) VALUES ($1, $2, $3) RETURNING *`,
      [name, surname, email]
    );
    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query(`SELECT * FROM person`);
    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`SELECT * FROM person WHERE id=$1`, [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
