import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  NOME: string;
  TURNO: string;
  HORARIO: string;
  VAGAS: number;
  CURSO: string;
  COD_DISCIPLINA: string;
}

export class UpdateDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute({
    NOME,
    TURNO,
    HORARIO,
    VAGAS,
    CURSO,
    COD_DISCIPLINA,
  }: IDisciplinaRequest) {
    const updatedDisciplina = await this.disciplinaRepository.updateDisciplina(
      NOME,
      TURNO,
      HORARIO,
      VAGAS,
      CURSO,
      COD_DISCIPLINA
    );

    return updatedDisciplina;
  }
}
