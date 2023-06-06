import { Knex } from "../../database/knex";
import { Professor } from "../../entities/Professor";
import { IProfessorRepository } from "../IProfessorRepository";

export class DataBaseProfessorRepository implements IProfessorRepository {
  public professores: Professor[];

  async getProfessor(): Promise<Professor[]> {
    this.professores = await Knex("TABELA_PROFESSOR");
    return this.professores;
  }
  async findBySIAEP(siaep: number): Promise<Professor> {
    const professores = await Knex("TABELA_PROFESSOR");
    const professor = professores.find((e) => e.SIAEP === siaep);
    return professor;
  }

  async save(professor: Professor): Promise<void> {
    await Knex("TABELA_PROFESSOR").insert(professor);
  }
  async updateProfessor(
    ID: string,
    NOME: string,
    EMAIL: string,
    SIAEP: number,
    NUMERO: number,
    DEPARTAMENTO: string,
    SENHA: string
  ): Promise<Professor[]> {
    await Knex("TABELA_PROFESSOR")
      .update({
        NOME: NOME,
        EMAIL: EMAIL,
        SIAEP: SIAEP,
        NUMERO: NUMERO,
        DEPARTAMENTO: DEPARTAMENTO,
        SENHA: SENHA,
      })
      .where({ ID: ID });

    this.professores = await Knex("TABELA_PROFESSOR");
    return this.professores;
  }

  async deleteProfessor(ID: string): Promise<Professor[]> {
    await Knex("TABELA_PROFESSOR").where({ ID: ID }).del();

    this.professores = await Knex("TABELA_PROFESSOR");

    return this.professores;
  }
}
