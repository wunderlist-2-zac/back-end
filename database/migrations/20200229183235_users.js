
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl
      .increments('id');
    tbl
      .dateTime('created_at',{ useTz : false, precision:0 }).defaultTo(knex.fn.now(0))
    tbl
      .string('username')
      .notNullable()
      .unique()
    tbl
      .string('password')
      .notNullable()      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
