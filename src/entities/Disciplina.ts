export class Disciplina {
  public readonly ID?: string;

  public NOME: string;
  public CURSO: string;
  public DESCRICAO: string;
  public COD_DISCIPLINA: string;

  constructor(props: Omit<Disciplina, "ID">, ID?: string) {
    Object.assign(this, props);

    if (!ID) {
      this.ID = v4();
    }
  }
}
