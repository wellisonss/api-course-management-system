import { Request, Response } from "express";
import { DeleteAlunoUseCase } from "./DeleteAlunoUseCase";

export class DeleteAlunoController {
  constructor(private deleteAlunoUseCase: DeleteAlunoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;

    try {
      const alunos = await this.deleteAlunoUseCase.execute({
        ID,
      });

      return response.status(201).json(alunos);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
