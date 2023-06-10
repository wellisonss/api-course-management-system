import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_DISCIPLINA").del();

  // Inserts seed entries
  await knex("TABELA_DISCIPLINA").insert([
    {
      NOME: "calculo",
      CURSO: "eng.",
      DESCRICAO: "kenio",
      COD_DISCIPLINA: 123,
    },
    {
      NOME: "calculo2",
      CURSO: "eng.",
      DESCRICAO: "boa",
      COD_DISCIPLINA: 1234,
    },

    // Adicione outros registros conforme necessário
  ]);
}
