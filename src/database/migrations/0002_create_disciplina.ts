import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("TABELA_DISCIPLINA", (table) => {
      table.string("NOME").notNullable();
      table.string("CURSO").notNullable();
      table.string("DESCRICAO").notNullable();
      table.integer("COD_DISCIPLINA").notNullable().index();
    })
    .then(() => {
      console.log("# Create table TABELA_DISCIPLINA");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("TABELA_DISCIPLINA").then(() => {
    console.log("# Dropped table TABELA_DISCIPLINA");
  });
}
