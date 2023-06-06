import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IProfessorRepository } from "../../../repositories/IProfessorRepository";

interface IRequest {
  SIAEP: number;
  SENHA: string;
}

export class AuthenticateProfessorUseCase {
  constructor(private professorRepository: IProfessorRepository) {}

  async execute({ SIAEP, SENHA }: IRequest) {
    // Verificar se o USUARIO existe
    const professorAlreadyExists =
      await this.professorRepository.findBySIAEP(SIAEP);

    if (!professorAlreadyExists) {
      throw new Error("User or password incorrect!");
    }

    // Verificar se a SENHA está correta
    const passwordMatch = await compare(SENHA, professorAlreadyExists.SENHA);

    if (!passwordMatch) {
      throw new Error("User or password incorrect!");
    }

    // Gerar o token do usuário
    const token = sign({}, "c957b733-7a23-41d5-96b7-fa8374f8e582", {
      subject: professorAlreadyExists.ID.toString(),
      // expiresIn: "30d"
    });

    return token;
  }
}
