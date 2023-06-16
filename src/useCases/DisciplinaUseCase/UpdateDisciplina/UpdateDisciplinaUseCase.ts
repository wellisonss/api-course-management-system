import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  ID: string;
  NOME: string;
  CURSO: string;
  HORARIO: string;
  COD_DISCIPLINA: string;
  VAGAS: number;
  ID_PROFESSOR?: string
}

export class UpdateDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute({
    ID,
    NOME,
    CURSO,
    HORARIO,
    COD_DISCIPLINA,
    VAGAS,
    ID_PROFESSOR
  }: IDisciplinaRequest) {
    const updatedDisciplina = await this.disciplinaRepository.updateDisciplina(
      ID,
      NOME,
      CURSO,
      HORARIO,
      COD_DISCIPLINA,
      VAGAS,
      ID_PROFESSOR
    );

    return updatedDisciplina;
  }
}
