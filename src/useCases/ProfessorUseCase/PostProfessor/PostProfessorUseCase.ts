import { Professor } from "../../../entities/Professor";
import { IProfessorRepository } from "../../../repositories/IProfessorRepository";

interface IUserRequest {
  NOME: string;
  EMAIL: string;
  SIAEP: number;
  NUMERO: number;
  DEPARTAMENTO: string;
  SENHA: string;
}

class CreateProfessorUseCase {
  constructor(private professorRepository: IProfessorRepository) {}

  async execute({
    NOME,
    EMAIL,
    SIAEP,
    NUMERO,
    DEPARTAMENTO,
    SENHA,
  }: IUserRequest) {
    const professorAlreadyExists = await this.professorRepository.findBySIAEP(
      SIAEP
    );

    if (professorAlreadyExists) {
      throw new Error("User already exists!");
    }

    const professor = new Professor({
      NOME,
      EMAIL,
      SIAEP,
      NUMERO,
      DEPARTAMENTO,
      SENHA,
    });

    await this.professorRepository.save(professor);

    return professor;
  }
}

export { CreateProfessorUseCase };
