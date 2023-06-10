import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  ID: string;
}

export class DeleteDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute({ ID }: IDisciplinaRequest) {
    const deleteDisciplina = await this.disciplinaRepository.deleteDisciplina(
      ID
    );

    return deleteDisciplina;
  }
}
