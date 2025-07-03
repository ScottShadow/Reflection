import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';
import pbkdf2Password from 'pbkdf2-password';

dotenv.config();
const hasher = pbkdf2Password();

const mysqlObj = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB || 'db',
};
const port = process.env.PORT;

console.log('DATABASE INFO:', mysqlObj);
const db = mysql.createConnection(mysqlObj);
const app = express();

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql');
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const salt = process.env.SALT || 'ingredient';
app.post('/auth/login', async (req, res) => {
  hasher({ password: req.body.password, salt }, (err, password, uniqueSalt, hash) => {
    if (err) throw err;
    db.query(`SELECT id,username from users WHERE email = ? AND password='${hash}';`, req.body.email, (queryErr, queryRes, queryFields) => {
      if (queryErr) { res.status(401).json({ error: queryErr.message }); return; }
      if (queryRes.length > 0) {
        res.status(200).json({ userName: queryRes[0].username, userId: queryRes[0].id });
        return;
      }
      res.status(401).json({ message: 'Invalid Credentials.' });
    });
    // console.log('hash complete: ', uniqueSalt, hash);
  });
  // console.log(req.body.password, req.body.email, req.body.hashedPassword);
});
app.post('/auth/register', async (req, res) => {
  const userName = req.body.username;
  let userId = null;
  hasher({ password: req.body.password, salt }, (err, password, uniqueSalt, hash) => {
    if (err) throw err;
    db.query(`insert into users (username,email,password) values ('${userName}','${req.body.email}','${hash}');`, (queryErr, queryRes) => {
      if (queryErr) { res.status(202).json({ error: queryErr.message }); return; }
      userId = queryRes.insertId;
      if (!queryErr) res.status(201).json({ userName, userId });
    });
    // console.log('hash complete: ', uniqueSalt, hash);
  });
  // console.log(req.body.password, req.body.email, req.body.hashedPassword);
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
