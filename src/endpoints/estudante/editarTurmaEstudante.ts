import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const editarTurmaEstudante = async (req: Request, res: Response) => {
    try {
        const { turma_id } = req.body
        const { id } = req.params

        if (!turma_id) throw new Error('Campo obrigatório')
        if (!id) throw new Error('Campo obrigatório')

        const [estudanteExiste] = await connection('labesystem_estudantes')
            .where({ id })

        if (!estudanteExiste) {
            throw new Error("Id do estudante não encontrado")
        }

        const [turmaExiste] = await connection('labesystem_turmas')
            .where({ id: turma_id })

        if (!turmaExiste) {
            throw new Error("Turma do estudante não encontrada")
        }

        await connection('labesystem_estudantes')
            .update({ turma_id })
            .where({ id })

        res.send({ message: "Turma atualizada com sucesso" })
    } catch (error: any) {
        res.send(error.message)
    }
}