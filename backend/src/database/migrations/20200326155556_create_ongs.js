
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary(); //<= Cria coluna id como chave primária da DB
    table.string('name').notNullable(); //<= Coluna name que Não pode estar vazia
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); //<= Esse campo só irá aceitar 2 caracteres
  })  
};

exports.down = function(knex) {
  return knex.schema.droptable('ongs');
};
