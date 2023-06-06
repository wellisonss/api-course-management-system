import { DataBaseDisciplinaRepository } from "../../../repositories/implementations/DataBaseDisciplinaRepository";
import { CreateDisciplinaController } from "./PostDisciplinaController";
import { CreateDisciplinaUseCase } from "./PostDisciplinaUseCase";

const dataBaseAlunoRepository = new DataBaseDisciplinaRepository();

const createDisciplinaUseCase = new CreateDisciplinaUseCase(
  dataBaseAlunoRepository
);

const createDisciplinaController = new CreateDisciplinaController(
  createDisciplinaUseCase
);

export { CreateDisciplinaController, createDisciplinaController };
