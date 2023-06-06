import { Request, Response } from "express";
import { CreateProfessorUseCase } from "./PostProfessorUseCase";

export class CreateProfessorController {
  constructor(private createProfessorUseCase: CreateProfessorUseCase) {}

  async handle(request: Request, response: Response) {
    const { NOME, EMAIL, SIAEP, NUMERO, DEPARTAMENTO, SENHA } = request.body;

    try {
      const registeredProfessor = await this.createProfessorUseCase.execute({
        NOME,
        EMAIL,
        SIAEP,
        NUMERO,
        DEPARTAMENTO,
        SENHA,
      });

      return response.status(201).json(registeredProfessor);
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
