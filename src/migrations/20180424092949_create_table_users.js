
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Books', table => {
      table.string('id',20).primary()
      table.string('title', 80)
      table.string('author', 80)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Books')
};
