import { Professor } from "../entities/Professor";

export interface IProfessorRepository {
  getProfessor(): Promise<Professor[]>;
  findBySIAEP(matricula: number): Promise<Professor>;
  save(professor: Professor): Promise<void>;
  updateProfessor(
    ID: string,
    NOME: string,
    EMAIL: string,
    SIAEP: number,
    NUMERO: number,
    DEPARTAMENTO: string,
    SENHA: string
  ): Promise<Professor[]>;
  deleteProfessor(ID: string): Promise<Professor[]>;
}
