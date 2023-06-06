import { Knex } from "../../database/knex";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class DataBaseUserRepository implements IUserRepository {
  public users: User[];

  async getUser(): Promise<User[]> {
    this.users = await Knex("TABELA_USER");
    return this.users;
  }
  async findByUser(usuario: number): Promise<User> {
    const users = await Knex("TABELA_USER");
    const user = users.find((e) => e.USUARIO === usuario);
    return user;
  }
}
