import { Turma } from "../entities/Turma";

export interface ITurmaRepository {
  getTurma(): Promise<Turma[]>;
  save(turma: Turma): Promise<void>;
  findById(ID: string): Promise<Turma>;
}
