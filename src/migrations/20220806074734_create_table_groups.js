/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Groups', table => {
        table.string('id',20).primary()
        table.string('name', 80).notNullable
        table.string('description', 80)
        table.string('id_user_adm', 200).notNullable

        table.foreign('id_user_adm').references('Users.id').deferrable('deferred')
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Groups')
};
