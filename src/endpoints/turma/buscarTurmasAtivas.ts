import { Request, Response } from "express";
import { connection } from "../../Data/connection";
import { TipoTurma } from "../../types/TipoTurma";

export const buscarTurmasAtivas = async (req: Request, res: Response) => {
  try{
    const turmas:TipoTurma[] = await connection("labesystem_turmas")
    res.send(turmas)

  } catch (error: any) {
    res.status(400). send({message: error.message})
  }
}