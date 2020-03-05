const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    remove,
    update
}

function find(userid){
    return db('tasks')
    .select('*')
    .where({user_id:userid})
}

function findById(userid,id){
    return db('tasks')
    .select('id','title','is_recurring','start','end','completed')
    .where({id, user_id:userid})
}

function add(task){
    return db('tasks')
    .insert(task,'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

function remove(userid,id){
    return db('tasks')
    .select('*')
    .where({id, user_id:userid})
    .del()
}

function update(userid, id,change){
    return db('tasks')
    .select('*')
    .where({id, user_id:userid})
    .update(change)
}