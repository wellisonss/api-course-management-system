import { IProfessorRepository } from "../../../repositories/IProfessorRepository";

export class GetProfessorUseCase {
  constructor(private professorRepository: IProfessorRepository) {}

  async execute() {
    const listProfessor = await this.professorRepository.getProfessor();

    return listProfessor;
  }
}
