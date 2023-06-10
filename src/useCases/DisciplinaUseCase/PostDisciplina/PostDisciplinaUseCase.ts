import { Disciplina } from "../../../entities/Disciplina";
import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  NOME: string;
  CURSO: string;
  DESCRICAO: string;
  COD_DISCIPLINA: string;
}

class CreateDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute({
    NOME,
    CURSO,
    DESCRICAO,
    COD_DISCIPLINA,
  }: IDisciplinaRequest) {
    const disciplinaAlreadyExists = await this.disciplinaRepository.findByCod(
      COD_DISCIPLINA
    );

    if (disciplinaAlreadyExists) {
      throw new Error("User already exists!");
    }

    const disciplina = new Disciplina({
      NOME,
      CURSO,
      DESCRICAO,
      COD_DISCIPLINA,
    });

    await this.disciplinaRepository.save(disciplina);

    return disciplina;
  }
}

export { CreateDisciplinaUseCase };
