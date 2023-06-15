import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("TABELA_DISCIPLINA", (table) => {
      table.string("ID").primary().index();
      table.string("NOME").notNullable();
      table.string("CURSO").notNullable();
      table.string("HORARIO").notNullable();
      table.integer("COD_DISCIPLINA").notNullable();
      table.string("ID_PROFESSOR").nullable();
      table.integer("VAGAS").notNullable();
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
