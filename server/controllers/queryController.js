const db = require('../models/queryModels');

const queryController = {};

// POST request: should create a new row in the user_tables table
  // req.body would send the 'table_name'
queryController.addRowUserTable = (req, res, next) => {
  const { table_name } = req.body;
  const text = `INSERT INTO user_tables (table_name) VALUES ($1)`;

  db.query(text, [table_name])
    .then((data) => {
      res.status(200).send(`table_name added to user_tables table with ID: ${data.insertId}`);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

// user adds many rows to a table - 'post' request
queryController.createSchemaTable = (req, res, next) => {
  const arr = req.body;
  // we will get an array of objects with multiple rows that will need to be added
  let addToTable = '';

  for (let i = 0; i < arr.length; i++) {
    const userFieldName = arr[i].fieldName
    const userFieldType = arr[i].fieldType;
    const userDefaultValue = arr[i].defaultValue;
    const userPrimaryKey = arr[i].primaryKey;
    const userUnique = arr[i].unique;
    const userRequired = arr[i].required;
    const userQueryable = arr[i].queryable;
    const userTableRelate = arr[i].tableRelationship;
    const userFieldRelate = arr[i].fieldRelationship;
    const userTypeRelate = arr[i].typeRelationship;
    console.log(
      'userFieldName: ',
      userFieldName,
      'userFieldType: ',
      userFieldType,
      'userDefaultValue:',
      userDefaultValue
    );

    let concatStr =
      `${userFieldName}` +
      ',' +
      `${userFieldType}` +
      ',' +
      `${userDefaultValue}` +
      ',' +
      `${userPrimaryKey}` +
      ',' +
      `${userUnique}` +
      ',' +
      `${userRequired}` +
      ',' +
      `${userQueryable}` +
      ',' +
      `${userTableRelate}` +
      ',' +
      `${userFieldRelate}` +
      ',' +
      `${userTypeRelate}` +
      '),';
    console.log('this is the concatenated string', concatStr);
    addToTable = addToTable + concatStr;
    console.log('this is our addToTable query after concat:', addToTable);
  }
  let oldDbQuery = `INSERT INTO user_tables (table_name) VALUES ($1) `;

  let newDB = oldDbQuery + addCart;
  // console.log(newDB, 'newDB');
  let lengthSlice = newDB.length - 1;
  // console.log(lengthSlice, 'lengthSlice');
  let newDbQuery = newDB.slice(0, lengthSlice);
  // console.log(newDbQuery, 'newDbQuery');
  // console.log('this is the new DB query, pls work! ', newDbQuery);

  db.query(newDbQuery)
    .then((data) => {
      // console.log(`this is the data from the user's CART: `, data.rows);
      res.locals.userCart = data.rows;
    })
    .then(next)
    .catch(() => {
      // next(err)
      next({
        log: `cartController.getProductsUserCart: ERROR: Error putting the user's cart in the database`,
        message: {
          err:
            'Error occurred in cartController.getProductsUserCart. Check server logs for more details.',
        },
      });
    });
};

// POST request: input all rows into fields table (user-created instance of a schema table) 
  // grabbing all the fields from the req.body
  // query would be like: INSERT INTO table_name (col, col, col etc) VALUES ($1, $2, $3 etc
  // do what Jenny did (see slack msg)
queryController.postTask = (req, res, next) => {
  const { item } = req.body;
  const text = `INSERT INTO Tasks (item) VALUES ($1)`;

  // request sent from server to db (like fetch), passing in our query
  db.query(text, [item])
    .then((data) => {
      res.status(200).send(`Task added with ID: ${data.insertId}`);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

// POST request: to add a new row in an existing fields/schema table
queryController.addRowSchemaTable = (req, res, next) => {

};

// PATCH request middleware: edit/update existing fields in an existing fields/schema table
queryController.editRowSchemaTable = (req, res, next) => {
  const { item } = req.body;
  const text = `INSERT INTO Tasks (item) VALUES ($1)`;

  // request sent from server to db (like fetch), passing in our query
  db.query(text, [item])
    .then((data) => {
      res.status(200).send(`Task added with ID: ${data.insertId}`);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE request: to delete a row from a schema table
  // if deleting entire table, need to also delete row from user_tables table
queryController.deleteRowSchemaTable = (req, res, next) => {
  // query Task table based on id and delete if item exists
  const id = parseInt(req.params.id);
  const text = `DELETE FROM Tasks WHERE id = $1`;

  // send our query over to the db passing in the query and id
  db.query(text, [id])
    .then(() => {
      res.status(200).send(`Task deleted with ID: ${id}`);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE request: to delete an entire schema table
  // if deleting entire table, need to also delete row from user_tables table
queryController.deleteSchemaTable = (req, res, next) => {

};

module.exports = queryController;