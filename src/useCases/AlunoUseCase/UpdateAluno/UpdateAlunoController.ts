import { Response, Request } from "express";
import { UpdateAlunoUseCase } from "./UpdateAlunoUseCase";

export class UpdateAlunoController {
  constructor(private updateAlunoUseCase: UpdateAlunoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    const { NOME, CURSO, EMAIL, SENHA } = request.body;

    try {
      const aluno = await this.updateAlunoUseCase.execute({
        ID,
        NOME,
        CURSO,
        EMAIL,
        SENHA,
      });

      return response.status(201).json(aluno);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
