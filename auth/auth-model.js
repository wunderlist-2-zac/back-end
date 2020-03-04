const db = require('../database/dbConfig.js');

module.exports = {
  add,
  findBy
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findBy(username) {
  return db('users')
    .select('*')
    .where({username});
}

function findById(id){
    return db('users')
    .select('*')
    .where({id})
}


