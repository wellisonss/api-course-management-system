import { Request, Response } from "express";
import { CreateTurmaUseCase } from "./PostTurmaUseCase";

export class CreateTurmaController {
  constructor(private createTurmaUseCase: CreateTurmaUseCase) {}

  async handle(request: Request, response: Response) {
    const { ID_USUARIO, ID_DISCIPLINA } = request.body;

    try {
      const registeredTurma = await this.createTurmaUseCase.execute({
        ID_USUARIO,
        ID_DISCIPLINA,
      });

      return response.status(201).json(registeredTurma);
    } catch (error) {
      if (error.message === "User already exists!") {
        return response.status(409).json({
          message: "User already exists!",
        });
      }

      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}
