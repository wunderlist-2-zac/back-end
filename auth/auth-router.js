const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const auth = require('../middleware/auth-middleware');

const Users = require('./auth-model');
const { jwtSecret } = require('./secrets');


//  CRUD endpoints beginning with /api/auth

//  POST >>>>>>>>
//  Create new user
router.post('/register', auth,(req, res) => {
  let user = req.body;
  console.log(req.body, "Feed me Seymour!")
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
  .then(saved => {
    req.session.loggedIn = true;
    res.status(201).json({ message: "New user saved!" });
  })
  .catch (err => {
    res.status(500).json({ err: "You're gonna have a bad time."});
  });
});

//  User Login
router.post('/login', auth, (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}`, token});
      } else {
        res.status(400).json({ message: "Invalid Credentials" });
      }
    })
    .catch (err => {
      res.status(500).json({ message: "Something went wrong" });
    });
});

//  Create user token upon login
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "12h"
  };
  return jwt.sign(payload, jwtSecret, options);
}

//  GET>>>>>>>>
//  Kill the session(Logout)
router.get('/', (req, res) => {
  Users.find()
  .then(users => {
    res.json(users);
  })
  .catch(error =res.send(error));
});

module.exports = router;