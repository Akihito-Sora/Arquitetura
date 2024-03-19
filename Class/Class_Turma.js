import { Turma_presencial } from "./Class_Turma_Presencial"
export class Turma extends Turma_presencial{
    constructor (frequencia, turma, nota, ra_aluno ){
        super (frequencia)
        this.turma = turma
        this.nota = nota
        this.ra_aluno = ra_aluno
    }

    aprovado(turma){
        if (turma.nota > 60 && turma.frequencia > 60){
            return true 
        }else {
            return false
        }
    }



}