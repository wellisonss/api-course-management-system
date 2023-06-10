import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_PROFESSOR").del();

  // Inserts seed entries
  await knex("TABELA_PROFESSOR").insert([
    {
      ID: "0813ec50-3a61-4f03-8ede-c40f6dd0f77b",
      NOME: "CaioR",
      EMAIL: "exemplo@gmail.com",
      SIAEP: 201619251,
      NUMERO: 333333,
      DEPARTAMENTO: "exatas",
      // senha 12345678
      SENHA: "$2a$08$rtG/kfiTqR0KU8TQI5B/wuBN4CrVst41rI9lYAA5FLczD0QmkrPDe",
    }
    // Adicione outros registros conforme necessário
  ]);
}
