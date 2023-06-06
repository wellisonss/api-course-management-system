import { DataBaseProfessorRepository } from "../../../repositories/implementations/DataBaseProfessorRepository";
import { CreateProfessorController } from "./PostProfessorController";
import { CreateProfessorUseCase } from "./PostProfessorUseCase";

const dataBaseProfessorRepository = new DataBaseProfessorRepository();

const createProfessorUseCase = new CreateProfessorUseCase(
  dataBaseProfessorRepository
);

const createProfessorController = new CreateProfessorController(
  createProfessorUseCase
);

export { CreateProfessorController, createProfessorController };
