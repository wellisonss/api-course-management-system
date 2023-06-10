import { Disciplina } from "../entities/Disciplina";

export interface IDisciplinaRepository {
  getDisciplina(): Promise<Disciplina[]>;
  findByCod(ID: string): Promise<Disciplina>;
  save(disciplina: Disciplina): Promise<void>;
  updateDisciplina(
    ID: string,
    NOME: string,
    CURSO: string,
    DESCRICAO: string,
    COD_DISCIPLINA: string
  ): Promise<Disciplina[]>;
  deleteDisciplina(ID: string): Promise<Disciplina[]>;
}
