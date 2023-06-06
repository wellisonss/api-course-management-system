import { Aluno } from "../entities/Aluno";

export interface IAlunoRepository {
  getAluno(): Promise<Aluno[]>;
  findByMatricula(matricula: number): Promise<Aluno>;
  save(aluno: Aluno): Promise<void>;
  updateAluno(
    NOME: string,
    CURSO: string,
    EMAIL: string,
    ID: string,
    passwordHash: string
  ): Promise<Aluno[]>;
  deleteAluno(ID: string): Promise<Aluno[]>;
}
