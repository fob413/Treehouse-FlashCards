const express = require('express');
const router = express.Router();

// app.use((req, res, next) => {
//   console.log('Hello');
//   const err = new Error('Noooo!!!!');
//   err.status = 500;
//   next(err);
// });

// app.use((req, res, next) => {
//   console.log('World');
//   next();
// });

router.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name})
  } else {
    res.redirect('/hello');
  }
});

router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

router.post('/clear', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

module.exports = router;