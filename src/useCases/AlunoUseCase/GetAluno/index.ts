import { DataBaseAlunoRepository } from '../../../repositories/implementations/DataBaseAlunoRepository';
import { GetAlunoController } from './GetAlunoController';
import { GetAlunoUseCase } from './GetAlunoUseCase';

const dataBaseAlunoRepository = new DataBaseAlunoRepository()

const getAlunoUseCase = new GetAlunoUseCase(
    dataBaseAlunoRepository,
    )
    
    const getAlunoController = new GetAlunoController(
        getAlunoUseCase,
        )
        
    export { GetAlunoController, getAlunoController }