import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("TABELA_DISCIPLINA").del();

  // Inserts seed entries
  await knex("TABELA_DISCIPLINA").insert([
    {
      NOME: "calculo",
      TURNO: "matutino",
      HORARIO: "23M12",
      VAGAS: 40,
      CURSO: "eng.",
      PROFESSOR: "kenio",
      COD_DISCIPLINA: 123,
    },
    {
      NOME: "calculo2",
      TURNO: "matutino",
      HORARIO: "23M34",
      VAGAS: 40,
      CURSO: "eng.",
      PROFESSOR: "ceron",
      COD_DISCIPLINA: 1234,
    },

    // Adicione outros registros conforme necessário
  ]);
}
