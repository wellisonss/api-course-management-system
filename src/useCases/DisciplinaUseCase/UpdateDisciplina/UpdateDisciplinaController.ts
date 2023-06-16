import { Response, Request } from "express";
import { UpdateDisciplinaUseCase } from "./UpdateDisciplinaUseCase";

export class UpdateDisciplinaController {
  constructor(private updateDisciplinaUseCase: UpdateDisciplinaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    const { NOME, HORARIO, CURSO, COD_DISCIPLINA, VAGAS, ID_PROFESSOR } = request.body;

    try {
      const disciplina = await this.updateDisciplinaUseCase.execute({
        ID,
        NOME,
        CURSO,
        HORARIO,
        COD_DISCIPLINA,
        VAGAS,
        ID_PROFESSOR
      });

      return response.status(201).json(disciplina);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
