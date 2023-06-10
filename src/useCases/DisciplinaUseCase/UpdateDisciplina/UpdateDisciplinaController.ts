import { Response, Request } from "express";
import { UpdateDisciplinaUseCase } from "./UpdateDisciplinaUseCase";

export class UpdateDisciplinaController {
  constructor(private updateDisciplinaUseCase: UpdateDisciplinaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { COD_DISCIPLINA } = request.params;
    const { NOME, DESCRICAO, CURSO } = request.body;

    try {
      const disciplina = await this.updateDisciplinaUseCase.execute({
        NOME,
        CURSO,
        DESCRICAO,
        COD_DISCIPLINA,
      });

      return response.status(201).json(disciplina);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
