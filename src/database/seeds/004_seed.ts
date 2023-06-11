import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_TURMA").del();

  // Inserts seed entries
  await knex("TABELA_TURMA").insert([
    {
      ID: "c9948afa-255c-42e9-8317-d34138b594bf",
      ID_USUARIO: "1",
      ID_DISCIPLINA: "1",
    },
    {
      ID: "0813ec50-3a61-4f03-8ede-c40f6dd0f77b",
      ID_USUARIO: "2",
      ID_DISCIPLINA: "2",
    },
    {
      ID: "de56f38d-6c13-4dff-9bac-77906ef6f155",
      ID_USUARIO: "3",
      ID_DISCIPLINA: "3",
    },

    // Adicione outros registros conforme necessário
  ]);
}
