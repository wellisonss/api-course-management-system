import { DataBaseProfessorRepository } from "../../../repositories/implementations/DataBaseProfessorRepository";
import { GetProfessorController } from "./GetProfessorController";
import { GetProfessorUseCase } from "./GetProfessorUseCase";

const dataBaseProfessorRepository = new DataBaseProfessorRepository();

const getProfessorUseCase = new GetProfessorUseCase(
  dataBaseProfessorRepository
);

const getProfessorController = new GetProfessorController(getProfessorUseCase);

export { GetProfessorController, getProfessorController };
