const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.render('Login'));

//register page
router.get('/register', (req, res) => res.render('register'));

//register handle
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = res.body;

  let errors = [];


  //check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields ' });
  }

  //check password match
  if (!password || !password2) {
    errors.push({ msg: 'Passwords do not match ' });
  }

  //check pass length
  if (password < 6) {
    errors.push({ msg: 'Password should be at least 6 characters ' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      email,
      password,
      password2
    });
  } else {
    res.send('pass')
  }

});

module.exports = router;