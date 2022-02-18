import { dataValida } from "../../util/dataValida";
import { gerarId } from "../../util/gerarId";
import { Request, Response } from "express";
import { connection } from "../../Data/connection";
export default async function criarDocente(
    req: Request,
    res: Response
): Promise<void> {
    let codigoDoErro: number = 400
    try {
        let { nome, email, data_nasc, turma_id } = req.body
        if (!nome || !email || !data_nasc || !turma_id) {
            codigoDoErro = 422
            throw new Error("Por favor, verifique suas informações \n Todos os campos são de preenchimento obrigatório")
        }
        const dataNascFormatada = dataValida(data_nasc)
        data_nasc = dataNascFormatada
        const id = gerarId
        await connection(`labesystem_docentes`)
            .insert({ id, nome, email, data_nasc, turma_id })
        res.status(201).send("Docente criado com sucesso!")
    } catch (error: any) {
        res.status(codigoDoErro).send({ message: error.message })
    }
}


