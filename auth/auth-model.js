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

function findBy(filter) {
  return db('users')
    .select('*')
    .where(filter);
}

function findById(id){
    return db('users')
    .select('*')
    .where({id})
}


