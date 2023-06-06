import { User } from "../entities/User";

export interface IUserRepository {
  getUser(): Promise<User[]>;
  findByUser(matricula: number): Promise<User>;
}
