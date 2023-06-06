import { DataBaseAlunoRepository } from "./../../../repositories/implementations/DataBaseAlunoRepository";
import { DeleteAlunoController } from "./DeleteAlunoController";
import { DeleteAlunoUseCase } from "./DeleteAlunoUseCase";

const dataBaseAlunoRepository = new DataBaseAlunoRepository();

const deleteAlunoUseCase = new DeleteAlunoUseCase(dataBaseAlunoRepository);

const deleteAlunoController = new DeleteAlunoController(deleteAlunoUseCase);

export { DeleteAlunoController, deleteAlunoController };
