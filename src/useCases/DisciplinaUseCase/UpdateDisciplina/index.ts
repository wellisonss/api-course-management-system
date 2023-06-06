import { DataBaseDisciplinaRepository } from "../../../repositories/implementations/DataBaseDisciplinaRepository";
import { UpdateDisciplinaController } from "./UpdateDisciplinaController";
import { UpdateDisciplinaUseCase } from "./UpdateDisciplinaUseCase";

const dataBaseDisciplinaRepository = new DataBaseDisciplinaRepository();

const updateDisciplinaUseCase = new UpdateDisciplinaUseCase(
  dataBaseDisciplinaRepository
);

const updateDisciplinaController = new UpdateDisciplinaController(
  updateDisciplinaUseCase
);

export { UpdateDisciplinaController, updateDisciplinaController };
