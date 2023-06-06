import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

export class GetDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute() {
    const listDisciplina = await this.disciplinaRepository.getDisciplina();

    return listDisciplina;
  }
}
