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
      HORARIO: "kenio",
      COD_DISCIPLINA: 123,
      ID_PROFESSOR: "WWW@@WWW",
      VAGAS: 40,
    },
    {
      ID: "2",
      NOME: "calculo2",
      CURSO: "eng.",
      HORARIO: "boa",
      COD_DISCIPLINA: 1234,
      ID_PROFESSOR: "QQQ11QQ",
      VAGAS: 40,
    },

    // Adicione outros registros conforme necessário
  ]);
}
