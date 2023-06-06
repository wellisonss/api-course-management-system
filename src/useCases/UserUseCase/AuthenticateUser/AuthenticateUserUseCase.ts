import { sign } from "jsonwebtoken";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { compare } from "bcryptjs";

interface IRequest {
  USUARIO: number;
  SENHA: string;
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ USUARIO, SENHA }: IRequest) {
    // Verificar se o USUARIO existe
    const userAlreadyExists = await this.userRepository.findByUser(
      USUARIO
    );

    if (!userAlreadyExists) {
      throw new Error("User or password incorrect!");
    }

    // Verificar se a SENHA está correta
    const passwordMatch = await compare(SENHA, userAlreadyExists.SENHA);

    if (!passwordMatch) {
      throw new Error("User or password incorrect!");
    }

    // Gerar o token do usuário
    const token = sign({}, "c957b733-7a23-41d5-96b7-fa8374f8e582", {
      subject: userAlreadyExists.ID.toString(),
      // expiresIn: "30d"
    });

    return { token, user: userAlreadyExists };
  }
}
