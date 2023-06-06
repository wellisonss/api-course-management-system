import { Response, Request } from "express";
import { UpdateProfessorUseCase } from "./UpdateProfessorUseCase";

export class UpdateProfessorController {
  constructor(private updateProfessorUseCase: UpdateProfessorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    const { NOME, EMAIL, SIAEP, NUMERO, DEPARTAMENTO, SENHA } = request.body;

    try {
      const professor = await this.updateProfessorUseCase.execute({
        ID,
        NOME,
        EMAIL,
        SIAEP,
        NUMERO,
        DEPARTAMENTO,
        SENHA,
      });

      return response.status(201).json(professor);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
