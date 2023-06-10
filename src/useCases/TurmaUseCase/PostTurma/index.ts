import { DataBaseTurmaRepository } from "../../../repositories/implementations/DataBaseTurmaRepository";
import { CreateTurmaController } from "./PostTurmaController";
import { CreateTurmaUseCase } from "./PostTurmaUseCase";

const dataBaseTurmaRepository = new DataBaseTurmaRepository();

const createTurmaUseCase = new CreateTurmaUseCase(dataBaseTurmaRepository);

const createTurmaController = new CreateTurmaController(createTurmaUseCase);

export { CreateTurmaController, createTurmaController };
