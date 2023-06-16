import { Turma } from "../../../entities/Turma";
import { ITurmaRepository } from "../../../repositories/ITurmaRepository";

interface ITurmaRequest {
  ID_USUARIO: string;
  ID_DISCIPLINA: string;
}

class CreateTurmaUseCase {
  constructor(private turmaRepository: ITurmaRepository) {}

  async execute({ ID_USUARIO, ID_DISCIPLINA }: ITurmaRequest) {
    
    const turma = new Turma({
      ID_USUARIO,
      ID_DISCIPLINA,
    });

    await this.turmaRepository.save(turma);

    return turma;
  }
}

export { CreateTurmaUseCase };
