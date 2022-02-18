import { Request, Response } from "express";
import { connection } from "../../Data/connection";
import { docente } from "../../types/TipoDocente";

export default async function buscarDocente(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const name = req.query
        const docentes: docente[] = await connection("labesystem_docentes")

        res.send(docentes)
    }
    catch (error) {
        res.status(500).send("Infelizmente, ocorreu um erro ao processar sua solicitação")

    }
}

