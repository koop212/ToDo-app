const express = require('express');

const app = express();
const bodyParser = require('body-parser');

// Route includes
const taskRouter = require('./routes/tasks.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Routes
app.use('/api/tasks', taskRouter);

// Serve static files
app.use(express.static('build'));

// App set
const PORT = process.env.PORT || 5000;

/** Listen **/
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;

