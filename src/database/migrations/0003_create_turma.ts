import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("TABELA_TURMA", (table) => {
      table.string("ID").primary().index();
      table.integer("ID_USUARIO").notNullable();
      table.string("ID_DISCIPLINA").notNullable();
    })
    .then(() => {
      console.log("# Create table TABELA_TURMA");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("TABELA_TURMA").then(() => {
    console.log("# Dropped table TABELA_TURMA");
  });
}
