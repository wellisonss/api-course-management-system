import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  ID: string;
  NOME: string;
  CURSO: string;
  DESCRICAO: string;
  COD_DISCIPLINA: string;
}

export class UpdateDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute({
    ID,
    NOME,
    CURSO,
    DESCRICAO,
    COD_DISCIPLINA,
  }: IDisciplinaRequest) {
    const updatedDisciplina = await this.disciplinaRepository.updateDisciplina(
      ID,
      NOME,
      CURSO,
      DESCRICAO,
      COD_DISCIPLINA
    );

    return updatedDisciplina;
  }
}
