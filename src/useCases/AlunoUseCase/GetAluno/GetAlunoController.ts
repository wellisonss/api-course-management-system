import { Response, Request } from "express";
import { GetAlunoUseCase } from './GetAlunoUseCase';

export class GetAlunoController {
    constructor(
        private getAlunoUseCase: GetAlunoUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const aluno = await this.getAlunoUseCase.execute();

            return response.status(201).json(aluno);
        } catch(error) {
            return response.status(400).json(
                {
                 message: error.message || 'Unexpected error.'
                } 
             );
        }

    }
}