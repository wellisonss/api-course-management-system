import { Disciplina } from "../entities/Disciplina";

export interface IDisciplinaRepository {
  getDisciplina(): Promise<Disciplina[]>;
  findByCod(ID: string): Promise<Disciplina>;
  save(disciplina: Disciplina): Promise<void>;
  updateDisciplina(
    ID: string,
    NOME: string,
    CURSO: string,
    HORARIO: string,
    COD_DISCIPLINA: string,
    VAGAS: number,
    ID_PROFESSOR: string
  ): Promise<Disciplina[]>;
  deleteDisciplina(ID: string): Promise<Disciplina[]>;
}
