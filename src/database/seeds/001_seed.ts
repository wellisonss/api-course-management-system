import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_PROFESSOR").del();

  // Inserts seed entries
  await knex("TABELA_PROFESSOR").insert([
    {
      ID: "1",
      NOME: "CaioR",
      EMAIL: "exemplo@gmail.com",
      SIAEP: 1234,
      NUMERO: 333333,
      DEPARTAMENTO: "exatas",
      SENHA: "12345678",
    },
    {
      ID: "2",
      NOME: "ElleR",
      EMAIL: "exemplo@gmail.com",
      SIAEP: 1235,
      NUMERO: 44444,
      DEPARTAMENTO: "humanas",
      SENHA: "12345678",
    },
    {
      ID: "3",
      NOME: "Manuela",
      EMAIL: "exemplo@gmail.com",
      SIAEP: 1236,
      NUMERO: 555555,
      DEPARTAMENTO: "linguagens",
      SENHA: "12345678",
    },
    // Adicione outros registros conforme necessário
  ]);
}
