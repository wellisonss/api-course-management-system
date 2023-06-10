import { Response, Request } from "express";
import { GetTurmaUseCase } from "./GetTurmaUseCase";

export class GetTurmaController {
  constructor(private getTurmaUseCase: GetTurmaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const turma = await this.getTurmaUseCase.execute();

      return response.status(201).json(turma);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
