import { v4 } from "uuid";

export class Aluno {

    public readonly ID?: string;

    public NOME: string;
    public EMAIL: string;
    public MATRICULA: number;
    public CURSO: string;
    public SENHA: string;

    constructor(props: Omit<Aluno, 'ID'>, ID?: string){
        Object.assign(this, props);

        if(!ID) {
            this.ID = v4();
        }
    }

}