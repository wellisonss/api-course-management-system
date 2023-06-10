import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_DISCIPLINA").del();

  // Inserts seed entries
  await knex("TABELA_DISCIPLINA").insert([
    {
      ID: "1",
      NOME: "calculo",
      CURSO: "eng.",
      DESCRICAO: "kenio",
      COD_DISCIPLINA: 123,
    },
    {
      ID: "2",
      NOME: "calculo2",
      CURSO: "eng.",
      DESCRICAO: "boa",
      COD_DISCIPLINA: 1234,
    },

    // Adicione outros registros conforme necessário
  ]);
}
