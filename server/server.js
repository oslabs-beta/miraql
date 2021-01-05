const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const queryController = require('./controllers/queryController.js');

// handle parsing request body and cookies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
}

// make endpoint routes for our CRUD middleware
app.post('/usertable', queryController.addRowUserTable);
app.post('/schemas', queryController.createSchemaTable);
app.post('/schemas', queryController.addRowSchemaTable);
app.patch('/schemas', queryController.editRowSchemaTable);
app.delete('/schemas', queryController.deleteRowSchemaTable);
app.delete('/schemas', queryController.deleteSchemaTable);


// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('Listening on port 3000!')
}); 