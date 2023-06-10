import { DataBaseAlunoRepository } from "../../../repositories/implementations/DataBaseAlunoRepository"; // Importa a implementação do repositório de alunos
import { AuthenticateAlunoController } from "./AuthenticateAlunoController"; // Importa o controlador de autenticação de alunos
import { AuthenticateAlunoUseCase } from "./AuthenticateAlunoUseCase"; // Importa o caso de uso de autenticação de alunos

// Cria uma instância do repositório de alunos
const dataBaseAlunoRepository = new DataBaseAlunoRepository();

// Cria uma instância do caso de uso de autenticação de alunos, passando o repositório como dependência
const authenticateAlunoUseCase = new AuthenticateAlunoUseCase(
  dataBaseAlunoRepository
);

// Cria uma instância do controlador de autenticação de alunos, passando o caso de uso como dependência
const authenticateAlunoController = new AuthenticateAlunoController(
  authenticateAlunoUseCase
);

// Exporta o controlador de autenticação de alunos e o renomeia como "authenticateAlunoController"
export { authenticateAlunoController, AuthenticateAlunoController };
