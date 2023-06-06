import { IAlunoRepository } from "../../../repositories/IAlunoRepository";
import { hash } from "bcryptjs";

interface IAlunoRequest {
  ID: string;
  NOME: string;
  EMAIL: string;
  CURSO: string;
  SENHA: string;
}

export class UpdateAlunoUseCase {
  constructor(private alunoRepository: IAlunoRepository) {}

  async execute({ NOME, CURSO, EMAIL, ID, SENHA }: IAlunoRequest) {

    const passwordHash = await hash(SENHA.toString(), 8);


    const updatedAluno = await this.alunoRepository.updateAluno(
      NOME,
      CURSO,
      EMAIL,
      ID,
      passwordHash
    );

    return updatedAluno;
  }
}
