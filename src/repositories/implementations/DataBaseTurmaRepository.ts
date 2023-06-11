import { Knex } from "../../database/knex";
import { Turma } from "../../entities/Turma";
import { ITurmaRepository } from "../ITurmaRepository";

export class DataBaseTurmaRepository implements ITurmaRepository {
  public turmas: Turma[];

  async getTurma(): Promise<Turma[]> {
    this.turmas = await Knex("TABELA_TURMA");
    return this.turmas;
  }

  async save(turma: Turma): Promise<void> {
    await Knex("TABELA_TURMA").insert(turma);
  }

  async findById(id: string): Promise<Turma> {
    const turmas = await Knex("TABELA_TURMA");
    const turma = turmas.find((e) => e.ID === id);
    return turma;
  }
}
