import app from "./app";
import buscarDocente from "./endpoints/docentes/buscarDocente";
import criarDocente from "./endpoints/docentes/criarDocente";
import mudarDocente from "./endpoints/docentes/mudarDocente";

app.post('/docentes', criarDocente)
app.patch('/docentes', mudarDocente)
app.get('/docentes', buscarDocente)