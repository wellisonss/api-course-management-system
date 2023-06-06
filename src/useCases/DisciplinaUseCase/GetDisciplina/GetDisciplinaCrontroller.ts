import { Response, Request } from "express";
import { GetDisciplinaUseCase } from "./GetDisciplinaUseCase";

export class GetDisciplinaController {
  constructor(private getDisciplinaUseCase: GetDisciplinaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const disciplina = await this.getDisciplinaUseCase.execute();

      return response.status(201).json(disciplina);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
