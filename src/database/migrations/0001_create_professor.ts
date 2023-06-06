import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("TABELA_PROFESSOR", (table) => {
      table.string("ID").primary().index();
      table.string("NOME").notNullable();
      table.string("EMAIL").notNullable();
      table.integer("SIAEP").notNullable();
      table.integer("NUMERO").notNullable();
      table.string("DEPARTAMENTO").notNullable();
      table.string("SENHA").notNullable();
    })
    .then(() => {
      console.log("# Create table TABELA_PROFESSOR");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("TABELA_PROFESSOR").then(() => {
    console.log("# Dropped table TABELA_PROFESSOR");
  });
}
