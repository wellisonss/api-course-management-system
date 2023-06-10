import { sign } from "jsonwebtoken"; // Importa a função sign do pacote "jsonwebtoken"
import { IAlunoRepository } from "../../../repositories/IAlunoRepository"; // Importa a interface IAlunoRepository
import { compare } from "bcryptjs"; // Importa a função compare do pacote "bcryptjs"

interface IRequest {
  MATRICULA: number;
  SENHA: string;
}

export class AuthenticateAlunoUseCase {
  constructor(private alunoRepository: IAlunoRepository) {} // Construtor que recebe uma instância de IAlunoRepository

  async execute({ MATRICULA, SENHA }: IRequest) {
    // Verificar se o USUARIO existe
    const alunoAlreadyExists = await this.alunoRepository.findByMatricula(
      MATRICULA
    ); // Busca o aluno pelo número de matrícula utilizando o repositório de alunos

    if (!alunoAlreadyExists) {
      throw new Error("User or password incorrect!");
    } // Se o aluno não existir, lança um erro indicando usuário ou senha incorretos

    // Verificar se a SENHA está correta
    const passwordMatch = await compare(SENHA, alunoAlreadyExists.SENHA); // Compara a senha informada com a senha armazenada do aluno

    if (!passwordMatch) {
      throw new Error("User or password incorrect!");
    } // Se as senhas não coincidirem, lança um erro indicando usuário ou senha incorretos

    // Gerar o token do usuário
    const token = sign(
      {}, // Payload vazio, pois apenas o ID do aluno está sendo utilizado no subject do token
      "c957b733-7a23-41d5-96b7-fa8374f8e582", // Chave secreta utilizada para assinar o token
      {
        subject: alunoAlreadyExists.ID.toString(), // Define o ID do aluno como subject do token
        // expiresIn: "30d" // Opção para definir a expiração do token (opcional)
      }
    );

    return { token, user: alunoAlreadyExists }; // Retorna o token e o usuário autenticado
  }
}
