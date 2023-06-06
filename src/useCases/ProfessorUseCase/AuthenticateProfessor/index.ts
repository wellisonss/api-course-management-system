import { DataBaseProfessorRepository } from "../../../repositories/implementations/DataBaseProfessorRepository";
import { AuthenticateProfessorController } from "./AuthenticateProfessorController";
import { AuthenticateProfessorUseCase } from "./AuthenticateProfessorUseCase";

const dataBaseProfessorRepository = new DataBaseProfessorRepository();

const authenticateProfessorUseCase = new AuthenticateProfessorUseCase(
  dataBaseProfessorRepository
);

const authenticateAlunoController = new AuthenticateProfessorController(
  authenticateProfessorUseCase
);

export { authenticateAlunoController, AuthenticateProfessorController };
