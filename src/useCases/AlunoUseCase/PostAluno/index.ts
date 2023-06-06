import { DataBaseAlunoRepository } from "../../../repositories/implementations/DataBaseAlunoRepository";
import { CreateAlunoController } from "./PostAlunoController";
import { CreateAlunoUseCase } from "./PostAlunoUseCase";

const dataBaseAlunoRepository = new DataBaseAlunoRepository();

const createAlunoUseCase = new CreateAlunoUseCase(dataBaseAlunoRepository);

const createAlunoController = new CreateAlunoController(createAlunoUseCase);

export { CreateAlunoController, createAlunoController };
