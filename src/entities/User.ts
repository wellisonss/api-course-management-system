export class User {
    public ID: string;
    public USUARIO: number;
    public SENHA: string;
    public TIPO: number;
  
    constructor(props: User) {
      Object.assign(this, props);
  }
  
  }

  // TIPO 1 ADM
  // TIPO 2 PROFESSOR
  // TIPO 3 ALUNO
  