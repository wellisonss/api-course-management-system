import express from "express";

import { deleteDisciplinaController } from "./useCases/DisciplinaUseCase/DeleteDisciplina";
import { createDisciplinaController } from "./useCases/DisciplinaUseCase/PostDisciplina";
import { updateDisciplinaController } from "./useCases/DisciplinaUseCase/UpdateDisciplina";
import { getDisciplinaController } from "./useCases/DisciplinaUseCase/GetDisciplina"
import { getAlunoController } from "./useCases/AlunoUseCase/GetAluno";
import { createAlunoController } from "./useCases/AlunoUseCase/PostAluno";
import { updateAlunoController } from "./useCases/AlunoUseCase/UpdateAluno";
import { deleteAlunoController } from "./useCases/AlunoUseCase/DeleteAluno";
import { getProfessorController } from "./useCases/ProfessorUseCase/GetProfessor";
import { createProfessorController } from "./useCases/ProfessorUseCase/PostProfessor";
import { updateProfessorController } from "./useCases/ProfessorUseCase/UpdateProfessor";
import { deleteProfessorController } from "./useCases/ProfessorUseCase/DeleteProfessor";
import { authenticateUserController } from "./useCases/UserUseCase/AuthenticateUser";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = express.Router();


router.get("/aluno", (request, response) => {
  return getAlunoController.handle(request, response);
});

router.post("/aluno", (request, response) => {
  return createAlunoController.handle(request, response);
});

router.put("/aluno/:ID", (request, response) => {
  return updateAlunoController.handle(request, response);
});

router.delete("/aluno/:ID", (request, response) => {
  return deleteAlunoController.handle(request, response);
});

router.get("/professor", (request, response) => {
  return getProfessorController.handle(request, response);
});

router.post("/professor", (request, response) => {
  return createProfessorController.handle(request, response);
});

router.put("/professor/:ID", (request, response) => {
  return updateProfessorController.handle(request, response);
});

router.delete("/professor/:ID", (request, response) => {
  return deleteProfessorController.handle(request, response);
});

router.get("/disciplina", (request, response) => {
  return getDisciplinaController.handle(request, response);
});

router.post("/disciplina", (request, response) => {
  return createDisciplinaController.handle(request, response);
});

router.put("/disciplina/:ID", (request, response) => {
  return updateDisciplinaController.handle(request, response);
});

router.delete("/disciplina/:ID", (request, response) => {
  return deleteDisciplinaController.handle(request, response);
});

router.post("/login", (request, response) => {
  return authenticateUserController.handle(request, response);
});

// rota utilizada somenta para verificar se o token é válido
router.get("/verify", ensureAuthenticated, (request, response) => {
  return response.json( { authenticated: true });
});

module.exports = { router };
