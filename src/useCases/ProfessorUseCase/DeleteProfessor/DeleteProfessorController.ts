import { Request, Response } from "express";
import { DeleteProfessorUseCase } from "./DeleteProfessorUseCase";

export class DeleteProfessorController {
  constructor(private deleteProfessorUseCase: DeleteProfessorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;

    try {
      const professores = await this.deleteProfessorUseCase.execute({
        ID,
      });

      return response.status(201).json(professores);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
