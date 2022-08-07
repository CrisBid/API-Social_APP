/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Users', table => {
        table.string('id',20).primary()
        table.string('name', 80).notNullable
        table.string('surname', 80)
        table.string('status', 200)
        table.string('email', 200).notNullable
        table.string('password', 80).notNullable
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Users')
};
