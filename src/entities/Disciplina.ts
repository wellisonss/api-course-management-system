import { v4 } from "uuid"; //biblioteca que faz id aleatorio automático.
export class Disciplina {
  public readonly ID?: string; //opcional para o user.

  public NOME: string;
  public CURSO: string;
  public DESCRICAO: string;
  public COD_DISCIPLINA: string;

  constructor(props: Omit<Disciplina, "ID">, ID?: string) {
    Object.assign(this, props); //construtor.

    if (!ID) {
      this.ID = v4();
    }
  }
}
