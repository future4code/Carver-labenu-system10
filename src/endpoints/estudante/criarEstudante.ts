import { Request, Response } from "express";
import { connection } from "../../Data/connection";
import Estudante from "../../pessoas/Estudante";
import { TipoEstudante } from "../../types/TipoEstudante";
import { EstudanteHobbie } from "../../types/TipoEstudanteHobbie";
import { TipoHobbie } from "../../types/TipoHobbie";
import { dataValida } from "../../util/dataValida";
import { gerarId } from "../../util/gerarId";

export const criarEstudante = async (req: Request, res: Response) => {
    try {
        const { nome, email, data_nasc, hobbies, turma_id } = req.body
        if (!nome || !email || !data_nasc || hobbies.length <= 0 || !turma_id) {
            throw new Error("Campos necessários não foram informados");
        }
        const dataNascFormatada = dataValida(data_nasc)
        if (!dataNascFormatada) {
            throw new Error("Campo inválido: data_nasc (formato não condiz dd/mm/aaaa)")
        }
        const [estudanteJaExiste] = await connection('labesystem_estudantes')
            .where({ email })

        if (estudanteJaExiste) {
            throw new Error("Esse email já foi cadastrado")
        }
        const idEstudante = gerarId()
        const estudante = new Estudante(idEstudante, nome, email, dataNascFormatada, turma_id, hobbies)
        const estudanteCriado: TipoEstudante = {
            id: estudante.pegarId(),
            nome: estudante.pegarNome(),
            email: estudante.pegarEmail(),
            data_nasc: estudante.pegarDataNasc(),
            turma_id: estudante.pegarTurmaId()
        }
        await connection('labesystem_estudantes').insert(estudanteCriado)

        for (let hobbie of hobbies) {
            let hobbieId

            console.log(hobbie)
            const [hobbieJaExiste] = await connection('labesystem_hobbies').where({ nome: hobbie })


            if (hobbieJaExiste) {
                 hobbieId = hobbieJaExiste.id
            } else {
                hobbieId = gerarId()
                const novoHobbie: TipoHobbie = {
                    id: hobbieId,
                    nome: hobbie
                }
                await connection().insert(novoHobbie)
            }

            const estudanteHobbie: EstudanteHobbie = {
                id: gerarId(),
                estudante_id: idEstudante,
                hobbie_id: hobbieId
            }
            await connection('labesystem_estudantes_hobbies').insert(estudanteHobbie)
        }
        res.send({ message: "Estudante cadastrado com sucesso", estudante })
    } catch (error: any) {
        res.send(error.message)

    }
}