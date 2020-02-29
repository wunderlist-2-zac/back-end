const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    remove,
    update
}

function find(){
    return db('tasks')
    .select('*')
}

function findById(id){
    return db('tasks')
    .select('*')
    .where({id})
}

function add(task){
    return db('tasks')
    .insert(task,'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

function remove(id){
    return db('tasks')
    .select('*')
    .where({id})
    .del()
}

function update(id,change){
    return db('tasks')
    .select('*')
    .where({id})
    .update(change)
}