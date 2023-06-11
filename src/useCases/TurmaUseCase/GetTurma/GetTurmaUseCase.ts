import { ITurmaRepository } from "../../../repositories/ITurmaRepository";

export class GetTurmaUseCase {
  constructor(private turmaRepository: ITurmaRepository) {}

  async execute() {
    const listTurma = await this.turmaRepository.getTurma();

    return listTurma;
  }
}
