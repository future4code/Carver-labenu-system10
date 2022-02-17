import { Request, Response } from "express";
import { dataValida } from "../../util/dataValida";
import { gerarId } from "../../util/gerarId";

export const criarEstudante = async (req: Request, res: Response) => {
    try {
        const { nome, email, data_nasc, hobbies, turma_id } = req.body
        if (!nome || !email || !data_nasc || !hobbies || !turma_id) {
            throw new Error("Campos necessários não foram informados")
        }
        const dataNascFormatada = dataValida(data_nasc)
        if(dataNascFormatada){
            throw new Error("Campo inválido: data_nasc (formato não condiz dd/mm/aaaa)")
        }
        const idEstudante = gerarId()

    } catch {

    }
}