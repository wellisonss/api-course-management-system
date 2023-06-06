import { DataBaseDisciplinaRepository } from "../../../repositories/implementations/DataBaseDisciplinaRepository";
import { GetDisciplinaController } from "./GetDisciplinaCrontroller";
import { GetDisciplinaUseCase } from "./GetDisciplinaUseCase";

const dataBaseDisciplinaRepository = new DataBaseDisciplinaRepository();

const getDisciplinaUseCase = new GetDisciplinaUseCase(
  dataBaseDisciplinaRepository
);

const getDisciplinaController = new GetDisciplinaController(
  getDisciplinaUseCase
);

export { GetDisciplinaController, getDisciplinaController };
