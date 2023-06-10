import { Aluno } from "../entities/Aluno"; // Importa a entidade Aluno

export interface IAlunoRepository {
  getAluno(): Promise<Aluno[]>; // Declara um método assíncrono chamado getAluno que retorna uma Promise de um array de objetos do tipo Aluno
  findByMatricula(matricula: number): Promise<Aluno>; // Declara um método assíncrono chamado findByMatricula que recebe um parâmetro 'matricula' do tipo number e retorna uma Promise de um objeto do tipo Aluno
  save(aluno: Aluno): Promise<void>; // Declara um método assíncrono chamado save que recebe um parâmetro 'aluno' do tipo Aluno e retorna uma Promise vazia (void)
  updateAluno(
    NOME: string,
    CURSO: string,
    EMAIL: string,
    ID: string,
    passwordHash: string
  ): Promise<Aluno[]>; // Declara um método assíncrono chamado updateAluno que recebe parâmetros do tipo string (NOME, CURSO, EMAIL, ID e passwordHash) e retorna uma Promise de um array de objetos do tipo Aluno
  deleteAluno(ID: string): Promise<Aluno[]>; // Declara um método assíncrono chamado deleteAluno que recebe um parâmetro 'ID' do tipo string e retorna uma Promise de um array de objetos do tipo Aluno
}
