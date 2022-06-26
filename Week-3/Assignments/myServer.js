const express = require('express');
const router = require('./routes/index.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({extends : false}));
app.use(cookieParser());
app.use(express.static('public')) //使用public中的靜態頁面
app.set('view engine', 'pug'); //使用template engine pug

app.use(router); //匯入index.js的routes

app.listen(3000,()=>console.log('app running at port 3000.'))