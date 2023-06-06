import { Disciplina } from "../entities/Disciplina";

export interface IDisciplinaRepository {
  getDisciplina(): Promise<Disciplina[]>;
  findByCod(COD_DISCIPLINA: string): Promise<Disciplina>;
  save(disciplina: Disciplina): Promise<void>;
  updateDisciplina(
    NOME: string,
    TURNO: string,
    HORARIO: string,
    VAGAS: number,
    CURSO: string,
    COD_DISCIPLINA: string
  ): Promise<Disciplina[]>;
  deleteDisciplina(COD_DISCIPLINA: string): Promise<Disciplina[]>;
}
