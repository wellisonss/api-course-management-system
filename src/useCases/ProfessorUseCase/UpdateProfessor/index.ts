import { DataBaseProfessorRepository } from "../../../repositories/implementations/DataBaseProfessorRepository";
import { UpdateProfessorController } from "./UpdateProfessorController";
import { UpdateProfessorUseCase } from "./UpdateProfessorUseCase";

const dataBaseProfessorRepository = new DataBaseProfessorRepository();

const updateProfessorUseCase = new UpdateProfessorUseCase(
  dataBaseProfessorRepository
);

const updateProfessorController = new UpdateProfessorController(
  updateProfessorUseCase
);

export { UpdateProfessorController, updateProfessorController };
