import { DataBaseTurmaRepository } from "../../../repositories/implementations/DataBaseTurmaRepository";
import { GetTurmaController } from "./GetTurmaController";
import { GetTurmaUseCase } from "./GetTurmaUseCase";

const dataBaseTurmaRepository = new DataBaseTurmaRepository();

const getTurmaUseCase = new GetTurmaUseCase(dataBaseTurmaRepository);

const getTurmaController = new GetTurmaController(getTurmaUseCase);

export { GetTurmaController, getTurmaController };
