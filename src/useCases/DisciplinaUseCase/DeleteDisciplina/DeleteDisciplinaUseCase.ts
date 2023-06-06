import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  COD_DISCIPLINA: string;
}

export class DeleteDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute({ COD_DISCIPLINA }: IDisciplinaRequest) {
    const deleteDisciplina = await this.disciplinaRepository.deleteDisciplina(
      COD_DISCIPLINA
    );

    return deleteDisciplina;
  }
}
