import { Knex } from "../../database/knex";
import { Disciplina } from "../../entities/Disciplina";
import { IDisciplinaRepository } from "../IDisciplinaRepository";

export class DataBaseDisciplinaRepository implements IDisciplinaRepository {
  public disciplinas: Disciplina[];

  async getDisciplina(): Promise<Disciplina[]> {
    this.disciplinas = await Knex("TABELA_DISCIPLINA");
    return this.disciplinas;
  }
  async findByCod(cod_disciplina: string): Promise<Disciplina> {
    const disciplinas = await Knex("TABELA_DISCIPLINA");
    const disciplina = disciplinas.find(
      (e) => e.COD_DISCIPLINA === cod_disciplina
    );
    return disciplina;
  }

  async save(disciplina: Disciplina): Promise<void> {
    await Knex("TABELA_DISCIPLINA").insert(disciplina);
  }

  async deleteDisciplina(ID: string): Promise<Disciplina[]> {
    await Knex("TABELA_DISCIPLINA").where({ ID: ID }).del();

    this.disciplinas = await Knex("TABELA_DISCIPLINA");

    return this.disciplinas;
  }

  async updateDisciplina(
    ID: string,
    NOME: string,
    CURSO: string,
    DESCRICAO: string,
    COD_DISCIPLINA: string
  ): Promise<Disciplina[]> {
    await Knex("TABELA_DISCIPLINA")
      .update({
        NOME: NOME,
        CURSO: CURSO,
        DESCRICAO: DESCRICAO,
        COD_DISCIPLINA: COD_DISCIPLINA,
      })
      .where({ ID: ID });

    this.disciplinas = await Knex("TABELA_DISCIPLINA");
    return this.disciplinas;
  }
}
