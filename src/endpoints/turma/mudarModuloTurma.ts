import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export default async function mudarModuloTurma(req: Request, res: Response): Promise<void> {
    const atualizarTurmas= async (id:string, modulo:string):Promise<any> => {
        if(modulo){
            await connection.raw(`
                UPDATE labesystem_turmas
                SET modulo ='${modulo}'
                WHERE id = '${id}'
            `)
        }
    }

    try {
        if(req.params.id === "" && req.body.modulo === ""){
            throw new Error("Insira os dados corretamente!")
        }
        await atualizarTurmas(
            req.params.modulo,
            req.body.id
        )

        res.status(200) .send("Módulo atualizado")

    } catch (error:any) {
        console.log(error);
        res.status(400).send(error.message || error.sqlMessage)

    }
}