
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments(); //<- Cria uma chave primária sequancial (1,2,3...)
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable(); //<- Decimal pois é um valor monetário  
    table.string('ong_id').notNullable();
    //Criar o relacionamento entre tabelas no baco de dados
    table.foreign('ong_id').references('id').inTable('ongs');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
