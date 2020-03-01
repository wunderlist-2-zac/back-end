
exports.up = function(knex) {
  return knex.schema
  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('title').notNullable()
      tbl.dateTime('start').notNullable()
      tbl.dateTime('end').notNullable()
      tbl.bool('completed').notNullable().defaultTo(false)
      tbl.timestamp('created_at').defaultTo(knex.fn.now()) 
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
};
