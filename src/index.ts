import app from "./app";
import buscarDocente from "./endpoints/docentes/buscarDocente";
import criarDocente from "./endpoints/docentes/criarDocente";
import mudarDocente from "./endpoints/docentes/mudarDocente";
import { buscarEstudante } from "./endpoints/estudante/buscarEstudante";
import { criarEstudante } from "./endpoints/estudante/criarEstudante";
import { mudarTurmaEstudante } from "./endpoints/estudante/mudarTurmaEstudante";
import { buscarTurmasAtivas } from "./endpoints/turma/buscarTurmasAtivas";
import { criarTurma } from "./endpoints/turma/criarTurma";
import mudarModuloTurma from "./endpoints/turma/mudarModuloTurma";

app.post('/docentes', criarDocente)
app.patch('/docentes', mudarDocente)
app.get('/docentes', buscarDocente)
app.post('/turmas', criarTurma)
app.patch('/turmas', mudarModuloTurma)
app.get('/turmas', buscarTurmasAtivas)
app.post('/estudantes', criarEstudante)
app.patch('/estudantes', mudarTurmaEstudante)
app.get('/estudantes', buscarEstudante)