import { Knex } from "../../database/knex"; // Importa o módulo Knex para acessar o objeto Knex
import { User } from "../../entities/User"; // Importa a entidade User
import { IUserRepository } from "../IUserRepository"; // Importa a interface IUserRepository

export class DataBaseUserRepository implements IUserRepository {
  public users: User[]; // Declara uma propriedade 'users' do tipo array de objetos do tipo User

  async getUser(): Promise<User[]> {
    this.users = await Knex("TABELA_USER"); // Consulta todos os registros da tabela "TABELA_USER" utilizando o Knex e atribui o resultado à propriedade 'users'
    return this.users; // Retorna a lista de usuários
  }

  async findByUser(usuario: number): Promise<User> {
    const users = await Knex("TABELA_USER"); // Consulta todos os registros da tabela "TABELA_USER" utilizando o Knex e atribui o resultado à variável 'users'
    const user = users.find((e) => e.USUARIO === usuario); // Procura o usuário com o número de usuário específico dentro do array de usuários
    return user; // Retorna o usuário encontrado ou undefined caso não exista
  }
}
