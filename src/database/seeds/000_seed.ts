import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_ALUNO").del();

  // Inserts seed entries
  await knex("TABELA_ALUNO").insert([
    {
      ID: "1",
      NOME: "Caio",
      EMAIL: "exemplo@gmail.com",
      MATRICULA: "1234",
      CURSO: "Computação",
      SENHA: "12345678",
    },
    {
      ID: "2",
      NOME: "Well",
      EMAIL: "exemplo@gmail.com",
      MATRICULA: "1235",
      CURSO: "Computação",
      SENHA: "12345678",
    },
    {
      ID: "3",
      NOME: "Manu",
      EMAIL: "exemplo@gmail.com",
      MATRICULA: "1236",
      CURSO: "Veterinária",
      SENHA: "12345678",
    },
    // Adicione outros registros conforme necessário
  ]);
}
