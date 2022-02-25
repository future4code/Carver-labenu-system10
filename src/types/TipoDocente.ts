export type docente = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
}

export enum especialidades {
    REACT = 'REACT',
    JS = 'JS',
    CSS = 'CSS',
    TYPESCRIPT = 'TYPESCRIPT',
    POO = 'POO'
}