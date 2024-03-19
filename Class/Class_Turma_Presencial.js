class Turma_presencial{
    constructor(frequencia){
        this.frequencia = frequencia;
    }

    aprovado(turma_presencial) {
        if (turma_presencial.frequencia > 60 ){
            return true;
        } else {
            return false;
        }
    }
}