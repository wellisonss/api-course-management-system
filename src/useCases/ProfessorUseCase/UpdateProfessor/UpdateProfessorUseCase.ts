import { IProfessorRepository } from "../../../repositories/IProfessorRepository";

interface IProfessorRequest {
  ID: string;
  NOME: string;
  EMAIL: string;
  SIAEP: number;
  NUMERO: number;
  DEPARTAMENTO: string;
  SENHA: string;
}

export class UpdateProfessorUseCase {
  constructor(private professorRepository: IProfessorRepository) {}

  async execute({
    ID,
    NOME,
    EMAIL,
    SIAEP,
    NUMERO,
    DEPARTAMENTO,
    SENHA,
  }: IProfessorRequest) {
    const updatedProfessor = await this.professorRepository.updateProfessor(
      ID,
      NOME,
      EMAIL,
      SIAEP,
      NUMERO,
      DEPARTAMENTO,
      SENHA
    );

    return updatedProfessor;
  }
}
