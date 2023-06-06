import { Aluno } from "../../../entities/Aluno";
import { IAlunoRepository } from "../../../repositories/IAlunoRepository";
import { hash } from "bcryptjs";

interface IAlunoRequest {
  NOME: string;
  EMAIL: string;
  MATRICULA: number;
  CURSO: string;
  SENHA: string;
}

class CreateAlunoUseCase {
  constructor(private alunoRepository: IAlunoRepository) {}

  async execute({ NOME, SENHA, CURSO, EMAIL, MATRICULA }: IAlunoRequest) {
    const alunoAlreadyExists = await this.alunoRepository.findByMatricula(
      MATRICULA
    );

    if (alunoAlreadyExists) {
      throw new Error("User already exists!");
    }
    const passwordHash = await hash(SENHA.toString(), 8);

    const aluno = new Aluno({
      NOME,
      SENHA: passwordHash,
      CURSO,
      EMAIL,
      MATRICULA,
    });

    await this.alunoRepository.save(aluno);

    return aluno;
  }
}

export { CreateAlunoUseCase };
