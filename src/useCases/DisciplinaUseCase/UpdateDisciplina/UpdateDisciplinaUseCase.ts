import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  NOME: string;
  CURSO: string;
  DESCRICAO: string;
  COD_DISCIPLINA: string;
}

export class UpdateDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute({
    NOME,
    CURSO,
    DESCRICAO,
    COD_DISCIPLINA,
  }: IDisciplinaRequest) {
    const updatedDisciplina = await this.disciplinaRepository.updateDisciplina(
      NOME,
      CURSO,
      DESCRICAO,
      COD_DISCIPLINA
    );

    return updatedDisciplina;
  }
}
