import { AuthenticateAlunoUseCase } from "./AuthenticateAlunoUseCase";
import { Response, Request } from "express";

export class AuthenticateAlunoController {
  constructor(private authenticateAlunoUseCase: AuthenticateAlunoUseCase) {}

  async handle(request: Request, response: Response) {
    const { MATRICULA, SENHA } = request.body;

    try {
      const token = await this.authenticateAlunoUseCase.execute({
        MATRICULA,
        SENHA,
      });

      return response.status(201).json( token );
    } catch (error) {
      if (error.message === "User or password incorrect!") {
        return response.status(409).json({
          message: "User or password incorrect!",
        });
      }

      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}
