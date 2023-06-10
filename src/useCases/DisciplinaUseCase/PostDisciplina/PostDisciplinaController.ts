import { Request, Response } from "express";
import { CreateDisciplinaUseCase } from "./PostDisciplinaUseCase";

export class CreateDisciplinaController {
  constructor(private createDisciplinaUseCase: CreateDisciplinaUseCase) {}

  async handle(request: Request, response: Response) {
    const { NOME, CURSO, DESCRICAO, COD_DISCIPLINA } = request.body;

    try {
      const registeredDisciplina = await this.createDisciplinaUseCase.execute({
        NOME,
        CURSO,
        DESCRICAO,
        COD_DISCIPLINA,
      });

      return response.status(201).json(registeredDisciplina);
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
