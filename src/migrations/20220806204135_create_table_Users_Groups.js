/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Users_Groups', table => {
        table.string('id_user',20)
        table.string('id_group',20)
        
        table.foreign('id_user').references('Users.id').deferrable('deferred')
        table.foreign('id_group').references('Groups.id').deferrable('deferred')
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Users_Groups')
};
