import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("TABELA_ALUNO", (table) => {
      table.string("ID").primary().index();
      table.string("NOME").notNullable();
      table.string("EMAIL").notNullable();
      table.integer("MATRICULA").notNullable();
      table.string("CURSO").notNullable();
      table.string("SENHA").notNullable();
    })
    .then(() => {
      console.log("# Create table TABELA_ALUNO");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("TABELA_ALUNO").then(() => {
    console.log("# Dropped table TABELA_ALUNO");
  });
}
