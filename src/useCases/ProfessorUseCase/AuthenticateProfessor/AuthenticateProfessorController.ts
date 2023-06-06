import { AuthenticateProfessorUseCase } from "./AuthenticateProfessorUseCase";
import { Response, Request } from "express";

export class AuthenticateProfessorController {
  constructor(
    private authenticateProfessorUseCase: AuthenticateProfessorUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { SIAEP, SENHA } = request.body;

    try {
      const token = await this.authenticateProfessorUseCase.execute({
        SIAEP,
        SENHA,
      });

      return response.status(201).json({ token });
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
