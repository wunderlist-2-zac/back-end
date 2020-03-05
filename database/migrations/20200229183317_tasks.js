
exports.up = function(knex) {
  return knex.schema
  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('title').notNullable()
      tbl.string('is_recurring',1)
      tbl.dateTime('start', { useTz : false, precision:0 } ).notNullable()
      tbl.dateTime('end', { useTz : false, precision:0 } ).notNullable()
      tbl.bool('completed').notNullable().defaultTo(false)
      tbl.timestamp('created_at',{ useTz : false, precision:0 }).defaultTo(knex.fn.now(0))
      tbl.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
};
