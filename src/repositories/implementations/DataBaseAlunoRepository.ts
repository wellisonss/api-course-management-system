import { Knex } from "../../database/knex"; // Importa o módulo Knex para acessar o objeto Knex
import { Aluno } from "../../entities/Aluno"; // Importa a entidade Aluno
import { IAlunoRepository } from "../IAlunoRepository"; // Importa a interface IAlunoRepository

export class DataBaseAlunoRepository implements IAlunoRepository {
  public alunos: Aluno[]; // Declara uma propriedade 'alunos' do tipo array de objetos do tipo Aluno

  async getAluno(): Promise<Aluno[]> {
    this.alunos = await Knex("TABELA_ALUNO"); // Consulta todos os registros da tabela "TABELA_ALUNO" utilizando o Knex e atribui o resultado à propriedade 'alunos'
    return this.alunos; // Retorna a lista de alunos
  }

  async findByMatricula(matricula: number): Promise<Aluno> {
    const alunos = await Knex("TABELA_ALUNO"); // Consulta todos os registros da tabela "TABELA_ALUNO" utilizando o Knex e atribui o resultado à variável 'alunos'
    const aluno = alunos.find((e) => e.MATRICULA === matricula); // Procura o aluno com a matrícula específica dentro do array de alunos
    return aluno; // Retorna o aluno encontrado ou undefined caso não exista
  }

  async save(aluno: Aluno): Promise<void> {
    await Knex("TABELA_ALUNO").insert(aluno); // Insere um novo aluno na tabela "TABELA_ALUNO" utilizando o Knex

    await Knex("TABELA_USER").insert({
      ID: aluno.ID,
      USUARIO: aluno.MATRICULA,
      SENHA: aluno.SENHA,
      TIPO: 3,
    }); // Insere um novo usuário na tabela "TABELA_USER" relacionado ao aluno inserido anteriormente
  }

  async updateAluno(
    NOME: string,
    CURSO: string,
    EMAIL: string,
    ID: string,
    SENHA: string
  ): Promise<Aluno[]> {
    await Knex("TABELA_ALUNO")
      .update({
        NOME: NOME,
        CURSO: CURSO,
        EMAIL: EMAIL,
        SENHA: SENHA,
      })
      .where({ ID: ID }); // Atualiza os dados do aluno na tabela "TABELA_ALUNO" utilizando o Knex e filtrando pelo ID específico

    await Knex("TABELA_USER")
      .update({
        SENHA: SENHA,
      })
      .where({ ID: ID }); // Atualiza a senha do usuário relacionado ao aluno na tabela "TABELA_USER" utilizando o Knex e filtrando pelo ID específico

    this.alunos = await Knex("TABELA_ALUNO"); // Atualiza a lista de alunos atribuindo todos os registros da tabela "TABELA_ALUNO" à propriedade 'alunos'
    return this.alunos; // Retorna a lista atualizada de alunos
  }

  async deleteAluno(ID: string): Promise<Aluno[]> {
    await Knex("TABELA_ALUNO").where({ ID: ID }).del(); // Exclui o aluno com o ID específico da tabela "TABELA_ALUNO" utilizando o Knex
    await Knex("TABELA_USER").where({ ID: ID }).del(); // Exclui o usuário relacionado ao aluno da tabela "TABELA_USER" utilizando o Knex

    this.alunos = await Knex("TABELA_ALUNO"); // Atualiza a lista de alunos atribuindo todos os registros da tabela "TABELA_ALUNO" à propriedade 'alunos'

    return this.alunos; // Retorna a lista atualizada de alunos
  }
}
