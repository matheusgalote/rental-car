const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));

const conn = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'rental'
});

app.get('/', (req, res) => {
  conn.query("SELECT * FROM cars", (err, cars) => {
    if (err) throw err;
    res.render('pages/index', {cars: cars});
  });
});

app.listen(3000, () => console.log('Servidor rodando...'))


