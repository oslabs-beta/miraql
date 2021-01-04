const db = require('../models/queryModels');

const queryController = {};

queryController.getCharacters = (req, res, next) => {
  // write code here
  const sqlStr =
    'SELECT ;
  db.query(sqlStr)
    .then((data) => {
      res.locals.characters = data.rows;
      next();
    })
    .catch((err) => console.log(err));
};

// should create a new item in the database
taskController.postTask = (req, res, next) => {
  const { item } = req.body;
  const text = `INSERT INTO Tasks (item) VALUES ($1)`;

  // request sent from server to db (like fetch), passing in our query
  pool.query(text, [item])
    .then((data) => {
      res.status(200).send(`Task added with ID: ${data.insertId}`);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

// should find items in the database based on an ID number and delete that item if it exists
taskController.deleteTask = (req, res, next) => {
  // query Task table based on id and delete if item exists
  const id = parseInt(req.params.id);
  const text = `DELETE FROM Tasks WHERE id = $1`;

  // send our query over to the db passing in the query and id
  pool.query(text, [id])
    .then(() => {
      res.status(200).send(`Task deleted with ID: ${id}`);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};