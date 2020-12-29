const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const adminRouter = require('./Routes/admin');
const shopRouter = require('./Routes/shop');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin' ,adminRouter)

app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../', 'views', 'error.html'))
})


app.listen(3001);