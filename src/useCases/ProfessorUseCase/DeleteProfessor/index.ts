import { DataBaseProfessorRepository } from "./../../../repositories/implementations/DataBaseProfessorRepository";
import { DeleteProfessorController } from "./DeleteProfessorController";
import { DeleteProfessorUseCase } from "./DeleteProfessorUseCase";

const dataBaseProfessorRepository = new DataBaseProfessorRepository();

const deleteProfessorUseCase = new DeleteProfessorUseCase(
  dataBaseProfessorRepository
);

const deleteProfessorController = new DeleteProfessorController(
  deleteProfessorUseCase
);

export { DeleteProfessorController, deleteProfessorController };
