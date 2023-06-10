import { AuthenticateAlunoUseCase } from "./AuthenticateAlunoUseCase"; // Importa a classe AuthenticateAlunoUseCase
import { Response, Request } from "express"; // Importa os tipos Response e Request do pacote "express"

export class AuthenticateAlunoController {
  constructor(private authenticateAlunoUseCase: AuthenticateAlunoUseCase) {} // Construtor que recebe uma instância de AuthenticateAlunoUseCase

  async handle(request: Request, response: Response) {
    // Método assíncrono handle que recebe os objetos Request e Response
    const { MATRICULA, SENHA } = request.body; // Obtém as propriedades MATRICULA e SENHA do corpo da requisição

    try {
      const token = await this.authenticateAlunoUseCase.execute({
        // Chama o método execute da instância de AuthenticateAlunoUseCase passando as credenciais do aluno
        MATRICULA,
        SENHA,
      });

      return response.status(201).json(token); // Retorna o token de autenticação como resposta da requisição com status 201
    } catch (error) {
      if (error.message === "User or password incorrect!") {
        // Verifica se o erro é de usuário ou senha incorretos
        return response.status(409).json({
          message: "User or password incorrect!",
        }); // Retorna uma resposta com status 409 indicando que usuário ou senha estão incorretos
      }

      return response.status(500).json({
        message: "Internal server error",
      }); // Retorna uma resposta com status 500 indicando um erro interno do servidor
    }
  }
}
