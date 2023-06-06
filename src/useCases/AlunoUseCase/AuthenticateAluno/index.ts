import { DataBaseAlunoRepository } from "../../../repositories/implementations/DataBaseAlunoRepository";
import { AuthenticateAlunoController } from "./AuthenticateAlunoController";
import { AuthenticateAlunoUseCase } from "./AuthenticateAlunoUseCase";

const dataBaseAlunoRepository = new DataBaseAlunoRepository();

const authenticateAlunoUseCase = new AuthenticateAlunoUseCase(
  dataBaseAlunoRepository
);

const authenticateAlunoController = new AuthenticateAlunoController(
  authenticateAlunoUseCase
);

export { authenticateAlunoController, AuthenticateAlunoController };
