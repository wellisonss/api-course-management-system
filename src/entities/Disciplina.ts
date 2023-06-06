export class Disciplina {
  public NOME: string;
  public TURNO: string;
  public HORARIO: string;
  public VAGAS: number;
  public CURSO: string;
  public COD_DISCIPLINA: string;

  constructor(props: Disciplina) {
    Object.assign(this, props);
}

}
