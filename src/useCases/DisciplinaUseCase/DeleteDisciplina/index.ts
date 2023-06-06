import { DataBaseDisciplinaRepository } from "./../../../repositories/implementations/DataBaseDisciplinaRepository";
import { DeleteDisciplinaController } from "./DeleteDisciplinaController";
import { DeleteDisciplinaUseCase } from "./DeleteDisciplinaUseCase";

const dataBaseDisciplinaRepository = new DataBaseDisciplinaRepository();

const deleteDisciplinaUseCase = new DeleteDisciplinaUseCase(dataBaseDisciplinaRepository);

const deleteDisciplinaController = new DeleteDisciplinaController(
  deleteDisciplinaUseCase
);

export { DeleteDisciplinaController, deleteDisciplinaController };
