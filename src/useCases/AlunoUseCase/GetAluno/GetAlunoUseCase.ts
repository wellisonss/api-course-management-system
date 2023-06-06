import { IAlunoRepository } from "../../../repositories/IAlunoRepository";

export class GetAlunoUseCase {
    constructor(
       private alunoRepository: IAlunoRepository
    ) {}

    async execute(){
        const listAluno = await this.alunoRepository.getAluno();

        return listAluno;
    }
}

