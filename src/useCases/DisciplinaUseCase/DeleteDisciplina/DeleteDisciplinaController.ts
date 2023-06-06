import { Request, Response } from "express";
import { DeleteDisciplinaUseCase } from "./DeleteDisciplinaUseCase";

export class DeleteDisciplinaController {
  constructor(private deleteDisciplinaUseCase: DeleteDisciplinaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { COD_DISCIPLINA } = request.params;

    try {
      const disciplinas = await this.deleteDisciplinaUseCase.execute({
        COD_DISCIPLINA,
      });

      return response.status(201).json(disciplinas);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
