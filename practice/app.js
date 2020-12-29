const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./Routes/admin');
const shopRouter = require('./Routes/shop');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin' ,adminRouter)

app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found 404</h1>')
})


app.listen(3001);