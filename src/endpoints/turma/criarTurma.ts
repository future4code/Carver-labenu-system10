import { Request, Response } from "express";
import { connection } from "../../Data/connection";
import { TipoTurma } from "../../types/TipoTurma";

export const criarTurma = async (req: Request, res: Response) => {
  try {
    const {nome, docentes, estudantes, modulo} = req.body;

    if (!nome || !docentes || !estudantes || !modulo){
      throw new Error("Campos necessários não foram informados");
    }

    const turma:TipoTurma = {
      id:Date.now().toString(),
      nome,
      docentes,
      estudantes,
      modulo,
    }

    await connection("labesystem_turmas").insert(turma);
    res.status(200).send("Turma criada!")

  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
}