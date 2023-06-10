export class Disciplina {
  public NOME: string;
  public CURSO: string;
  public DESCRICAO: string;
  public COD_DISCIPLINA: string;

  constructor(props: Disciplina) {
    Object.assign(this, props);
  }
}
