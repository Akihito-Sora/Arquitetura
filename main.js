import { Aluno } from "./Class/Class_Aluno";
import { Turma } from "./Class/Class_Turma";

let aluno = new Aluno({ nome:"Toshio", login:123 ,ra:2312867 }),
    turma = new Turma({frequencia: 60, turma: "as62a", nota: 60 , ra_aluno:2312867});

console.log(aluno.nome  + 'cadastrado com sucesso');
console.log(turma.aprovado(turma))