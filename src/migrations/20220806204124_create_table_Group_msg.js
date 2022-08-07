/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Groups_Msg', table => {
        table.string('id',20).primary()
        table.string('id_user',20)
        table.string('id_group',20)
        table.string('name_user', 100).notNullable
        table.string('level_user', 100).notNullable
        table.integer('send_status', 100)
        table.string('conteudo_msg', 500).notNullable

        table.foreign('id_user').references('Users.id').deferrable('deferred')
        table.foreign('id_group').references('Groups.id').deferrable('deferred')
    })  
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Groups_Msg')
};
