import { Request, Response } from "express";

import { connection } from "../../Data/connection";
export default async function mudarDocente(
     req: Request,
    res: Response
): Promise<void> {
    try {
        const { turma_id } = req.body
        const { id } = req.params

        if (!turma_id) throw new Error('É necessário informar a id da turma')
        if (!id) throw new Error('É necessário informar a id do docente')

        const [docenteMudar] = await connection('labesystem_estudantes')
            .where({ id })

        if (!docenteMudar) {
            throw new Error("Não foi possível encontrar um docente com a id informada")
        }

        const [turmaMudar] = await connection(`labesystem_docentes`)
            .where({ id: turma_id })

        if (!turmaMudar) {
            throw new Error("Não foi possível encontrar uma turma com a id informada")
        }

        await connection(`labesystem_docentes`)
            .update({ turma_id })
            .where({ id })

        res.send({ message: "Turma atualizada com sucesso" })
    } catch (error: any) {
        res.send(error.message)
    }
}

