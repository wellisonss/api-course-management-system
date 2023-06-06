import { IProfessorRepository } from "../../../repositories/IProfessorRepository";

interface IProfessorRequest {
  ID: string;
}

export class DeleteProfessorUseCase {
  constructor(private professorRepository: IProfessorRepository) {}

  async execute({ ID }: IProfessorRequest) {
    const deleteProfessor = await this.professorRepository.deleteProfessor(ID);

    return deleteProfessor;
  }
}
