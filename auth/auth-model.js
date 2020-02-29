const db = require('../database/dbConfig');
const router = require('./auth-router');

module.exports = {
  add,
  findBy,
  find
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findBy(filter) {
  return db('users')
    .select('id', 'username')
    .where(filter);
}

function find() {
  return db('users')
  .select('id', 'username');
}


module.exports = router;

