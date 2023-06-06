import { v4 } from "uuid";

export class Professor {
  public readonly ID?: string;

  public NOME: string;
  public EMAIL: string;
  public SIAEP: number;
  public NUMERO: number;
  public DEPARTAMENTO: string;
  public SENHA: string;

  constructor(props: Omit<Professor, "ID">, ID?: string) {
    Object.assign(this, props);

    if (!ID) {
      this.ID = v4();
    }
  }
}
