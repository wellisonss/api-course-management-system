import { DataBaseAlunoRepository } from "../../../repositories/implementations/DataBaseAlunoRepository";
import { UpdateAlunoController } from "./UpdateAlunoController";
import { UpdateAlunoUseCase } from "./UpdateAlunoUseCase";

const dataBaseAlunoRepository = new DataBaseAlunoRepository();

const updateAlunoUseCase = new UpdateAlunoUseCase(dataBaseAlunoRepository);

const updateAlunoController = new UpdateAlunoController(updateAlunoUseCase);

export { UpdateAlunoController, updateAlunoController };
