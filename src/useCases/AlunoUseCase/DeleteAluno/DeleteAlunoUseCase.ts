import { IAlunoRepository } from "../../../repositories/IAlunoRepository";

interface IAlunoRequest {
  ID: string;
}

export class DeleteAlunoUseCase {
  constructor(private alunoRepository: IAlunoRepository) {}

  async execute({ ID }: IAlunoRequest) {
    const deleteAluno = await this.alunoRepository.deleteAluno(ID);

    return deleteAluno;
  }
}
