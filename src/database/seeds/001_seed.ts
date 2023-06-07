import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_PROFESSOR").del();

  // Inserts seed entries
  await knex("TABELA_PROFESSOR").insert([
    {
      ID: "e0ed9e38-6bdf-4cdf-b29c-f9d0ba398506",
      NOME: "CaioR",
      EMAIL: "exemplo@gmail.com",
      SIAEP: 201619257,
      NUMERO: 333333,
      DEPARTAMENTO: "exatas",
      // senha 12345678
      SENHA: "$2a$08$Se4.JidJ7AHf5gFEWy0FF.y00ASSkBX6hBYbPzX7YFJAkhcbnxEyG",
    }
    // Adicione outros registros conforme necessário
  ]);
}
