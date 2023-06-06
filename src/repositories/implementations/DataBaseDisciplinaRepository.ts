import { Knex } from "../../database/knex";
import { Disciplina } from "../../entities/Disciplina";
import { IDisciplinaRepository } from "../IDisciplinaRepository";

export class DataBaseDisciplinaRepository implements IDisciplinaRepository {
  
  public disciplinas: Disciplina[];
  
  async getDisciplina(): Promise<Disciplina[]> {
    this.disciplinas = await Knex("TABELA_DISCIPLINA");
    return this.disciplinas;
  }
  async findByCod(COD_DISCIPLINA: string): Promise<Disciplina> {
    const disciplinas = await Knex("TABELA_DISCIPLINA");
    const disciplina = disciplinas.find(
      (e) => e.COD_DISCIPLINA === COD_DISCIPLINA
      );
      return disciplina;
    }
    
    async save(disciplina: Disciplina): Promise<void> {
      await Knex("TABELA_DISCIPLINA").insert(disciplina);
    }
    
    async deleteDisciplina(COD_DISCIPLINA: string): Promise<Disciplina[]> {
      await Knex("TABELA_DISCIPLINA")
      .where({ COD_DISCIPLINA: COD_DISCIPLINA })
      .del();
      
      this.disciplinas = await Knex("TABELA_DISCIPLINA");
      
      return this.disciplinas;
    }
    
    async updateDisciplina(NOME: string, TURNO: string, HORARIO: string, VAGAS: number, CURSO: string, COD_DISCIPLINA: string): Promise<Disciplina[]> {
      await Knex("TABELA_DISCIPLINA")
      .update({
        COD_DISCIPLINA: COD_DISCIPLINA,
        NOME: NOME,
        TURNO: TURNO,
        HORARIO: HORARIO,
        VAGAS: VAGAS,
        CURSO: CURSO,
      })
      .where({ COD_DISCIPLINA: COD_DISCIPLINA });
      
      this.disciplinas = await Knex("TABELA_DISCIPLINAS");
      return this.disciplinas;
    }
    
  }
