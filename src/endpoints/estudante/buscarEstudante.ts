import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const buscarEstudante = async (req: Request, res: Response) => {
    try {
        const { nome } = req.query
       const busca = await connection('labesystem_estudantes')
            .where("nome", "like", `${nome}`)
        res.send({busca})
    } catch (error: any) {
        res.send(error.message)
    }
}