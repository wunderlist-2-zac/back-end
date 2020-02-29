
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl
      .increments();
    tbl
      .string('Time Stamp')
      .notNullable()      
    tbl
      .string('Username')
      .notNullable()
      .unique()
    tbl
      .password()
      .notNullable()
      .unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('users');
};
