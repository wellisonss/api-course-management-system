import { Request, Response } from 'express';
import { CreateAlunoUseCase } from './PostAlunoUseCase';

export class CreateAlunoController {
    constructor(
        private createAlunoUseCase: CreateAlunoUseCase,
    ) {}

    async handle(request: Request, response: Response) {
        const { NOME, CURSO, EMAIL, MATRICULA, SENHA } = request.body; 
        
        try {
            const registeredAluno = await this.createAlunoUseCase.execute({
                NOME,
                CURSO,
                EMAIL,
                MATRICULA,
                SENHA
            });

            return response.status(201).json(registeredAluno);
        } catch(error) {
            if (error.message === 'User already exists!') {
                return response.status(409).json({
                    message: 'User already exists!'
                });
            }

            return response.status(500).json({
                message: 'Internal server error'
            });
        }
    }
}