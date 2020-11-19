let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render('auth/login')
  },

  register: (req, res) => {
    console.log(req.body)
    res.render('auth/register')
  },

  loginSubmit: (req, res) => {
    // implement
  },

  registerSubmit: (req, res) => {
    console.log('register', req.body)
    if (req.body.email && req.body.password) {
      users[req.body.email] = {email: req.body.email, password: req.body.password};
      req.session['user'] = req.body.email
      res.redirect('/reminders')
    } else {
      res.status(400);
      res.send('invalid user');
    }
  }
}

module.exports = authController;
