import { Response, Request } from "express";
import { GetProfessorUseCase } from "./GetProfessorUseCase";

export class GetProfessorController {
  constructor(private getProfessorUseCase: GetProfessorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const professor = await this.getProfessorUseCase.execute();

      return response.status(201).json(professor);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
