import { Knex } from "../../database/knex";
import { Aluno } from "../../entities/Aluno";
import { IAlunoRepository } from "../IAlunoRepository";

export class DataBaseAlunoRepository implements IAlunoRepository {
  public alunos: Aluno[];

  async getAluno(): Promise<Aluno[]> {
    this.alunos = await Knex("TABELA_ALUNO");
    return this.alunos;
  }

  async findByMatricula(matricula: number): Promise<Aluno> {
    const alunos = await Knex("TABELA_ALUNO");
    const aluno = alunos.find((e) => e.MATRICULA === matricula);
    return aluno;
  }

  async save(aluno: Aluno): Promise<void> {
    await Knex("TABELA_ALUNO").insert(aluno);
    await Knex("TABELA_USER").insert({
      ID: aluno.ID,
      USUARIO: aluno.MATRICULA,
      SENHA: aluno.SENHA,
      TIPO: 3,
    });

  }
  async updateAluno(
    NOME: string,
    CURSO: string,
    EMAIL: string,
    ID: string,
    passwordHash: string
  ): Promise<Aluno[]> {
    await Knex("TABELA_ALUNO")
      .update({
        NOME: NOME,
        CURSO: CURSO,
        EMAIL: EMAIL,
        SENHA: passwordHash,
      })
      .where({ ID: ID });

      await Knex("TABELA_USER")
      .update({
        SENHA: passwordHash,
      })
      .where({ ID: ID });

    this.alunos = await Knex("TABELA_ALUNO");
    return this.alunos;
  }

  async deleteAluno(ID: string): Promise<Aluno[]> {
    await Knex("TABELA_ALUNO").where({ ID: ID }).del();
    await Knex("TABELA_USER").where({ ID: ID }).del();

    this.alunos = await Knex("TABELA_ALUNO");

    return this.alunos;
  }
}
