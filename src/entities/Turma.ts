import { v4 } from "uuid";

export class Turma {
  public readonly ID?: string;
  public ID_USUARIO: string;
  public ID_DISCIPLINA: string;

  constructor(props: Omit<Turma, "ID">, ID?: string) {
    Object.assign(this, props);

    if (!ID) {
      this.ID = v4();
    }
  }
}
