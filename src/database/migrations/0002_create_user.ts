import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("TABELA_USER", (table) => {
      table.string("ID").primary().index();
      table.integer("USUARIO").notNullable();
      table.string("SENHA").notNullable();
      table.integer("TIPO").notNullable();
    })
    .then(() => {
      console.log("# Create table TABELA_USER");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("TABELA_USER").then(() => {
    console.log("# Dropped table TABELA_USER");
  });
}
