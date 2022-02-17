export const dataValida = (data: string) => {
    try {
        if (typeof data !== "string") throw new Error()

        let dataFormatada: string | string[] | Date = data.split("/")
        if (dataFormatada.length !== 3) throw new Error()

        const dia = Number(dataFormatada[0])
        const mes = Number(dataFormatada[1])
        const ano = Number(dataFormatada[2])

        if (!dia || !mes || !ano) throw new Error()

        dataFormatada = new Date(`${ano}/${mes}/${dia}`)

        if (!dataFormatada) throw new Error()
        if (!(dataFormatada instanceof Date)) throw new Error()
        if (isNaN(dataFormatada.getTime())) throw new Error()

    } catch (error) {
        return null
    }
}