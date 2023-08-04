const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// database
const sequelize = require('./util/database');

const app = express();
app.use(bodyParser.json());

// page not found controller
const notFoundController = require('./controllers/not_found');

// importing routes
const routesUser = require('./routes/expense');

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(routesUser);

app.use(notFoundController.notFound);

sequelize.sync()
.then(res=>{
    console.log("done");
    app.listen(4000);
})
.catch(err=>{
    console.log(err);
})
