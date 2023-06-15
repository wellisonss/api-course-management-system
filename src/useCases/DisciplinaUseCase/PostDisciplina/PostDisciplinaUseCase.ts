import { Disciplina } from "../../../entities/Disciplina";
import { IDisciplinaRepository } from "../../../repositories/IDisciplinaRepository";

interface IDisciplinaRequest {
  NOME: string;
  CURSO: string;
  HORARIO: string;
  COD_DISCIPLINA: string;
  VAGAS: number;
}

class CreateDisciplinaUseCase {
  constructor(private disciplinaRepository: IDisciplinaRepository) {}

  async execute({
    NOME,
    CURSO,
    HORARIO,
    COD_DISCIPLINA,
    VAGAS,
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
      HORARIO,
      COD_DISCIPLINA,
      VAGAS,
    });

    await this.disciplinaRepository.save(disciplina);

    return disciplina;
  }
}

export { CreateDisciplinaUseCase };
