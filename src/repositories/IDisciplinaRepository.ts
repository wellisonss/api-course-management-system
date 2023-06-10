import { Disciplina } from "../entities/Disciplina";

export interface IDisciplinaRepository {
  getDisciplina(): Promise<Disciplina[]>;
  findByCod(COD_DISCIPLINA: string): Promise<Disciplina>;
  save(disciplina: Disciplina): Promise<void>;
  updateDisciplina(
    NOME: string,
    CURSO: string,
    DESCRICAO: string,
    COD_DISCIPLINA: string
  ): Promise<Disciplina[]>;
  deleteDisciplina(COD_DISCIPLINA: string): Promise<Disciplina[]>;
}
