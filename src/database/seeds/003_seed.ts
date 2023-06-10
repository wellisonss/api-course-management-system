import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_USER").del();

  // Inserts seed entries
  await knex("TABELA_USER").insert([
    {
      ID: "c9948afa-255c-42e9-8317-d34138b594bf",
      USUARIO: 1251307,
      // senha 1251307
      SENHA: "$2a$08$t1GOVRW8PerORaWeTRjqGOk6LPF3x8S3/AxWh4hyLUY7ZpFxKDO92",
      TIPO: 1
    },
    {
      ID: "0813ec50-3a61-4f03-8ede-c40f6dd0f77b",
      USUARIO: 201619251,
      // senha 12345678
      SENHA: "$2a$08$rtG/kfiTqR0KU8TQI5B/wuBN4CrVst41rI9lYAA5FLczD0QmkrPDe",
      TIPO: 2
    },
    {
      ID: "de56f38d-6c13-4dff-9bac-77906ef6f155",
      USUARIO: 201619254,
      // senha 12345678
      SENHA: "$2a$08$A.fKeV8YN.lwQIK7MauiduD11/YddmAUn5QmrnurXD8ZtsT6TwbxC",
      TIPO: 3
    },

    // Adicione outros registros conforme necessário
  ]);
}
