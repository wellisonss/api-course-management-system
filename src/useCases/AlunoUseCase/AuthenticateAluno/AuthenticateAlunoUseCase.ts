import { sign } from "jsonwebtoken";
import { IAlunoRepository } from "../../../repositories/IAlunoRepository";
import { compare } from "bcryptjs";

interface IRequest {
  MATRICULA: number;
  SENHA: string;
}

export class AuthenticateAlunoUseCase {
  constructor(private alunoRepository: IAlunoRepository) {}

  async execute({ MATRICULA, SENHA }: IRequest) {
    // Verificar se o USUARIO existe
    const alunoAlreadyExists = await this.alunoRepository.findByMatricula(
      MATRICULA
    );

    if (!alunoAlreadyExists) {
      throw new Error("User or password incorrect!");
    }

    // Verificar se a SENHA está correta
    const passwordMatch = await compare(SENHA, alunoAlreadyExists.SENHA);

    if (!passwordMatch) {
      throw new Error("User or password incorrect!");
    }

    // Gerar o token do usuário
    const token = sign({}, "c957b733-7a23-41d5-96b7-fa8374f8e582", {
      subject: alunoAlreadyExists.ID.toString(),
      // expiresIn: "30d"
    });

    return { token, user: alunoAlreadyExists };
  }
}
