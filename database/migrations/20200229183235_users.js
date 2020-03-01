
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl
      .increments();
    tbl
      .timestamp('created_at').defaultTo(knex.fn.now())    
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
