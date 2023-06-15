import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  ID: string;
  NOME: string;
  CURSO: string;
  HORARIO: string;
  COD_DISCIPLINA: string;
  VAGAS: number;
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
  }: IDisciplinaRequest) {
    const updatedDisciplina = await this.disciplinaRepository.updateDisciplina(
      ID,
      NOME,
      CURSO,
      HORARIO,
      COD_DISCIPLINA,
      VAGAS
    );

    return updatedDisciplina;
  }
}
