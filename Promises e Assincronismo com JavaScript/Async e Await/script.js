
// Async e Await é uma forma mais bonita de escrever as promises

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')



async function buscarAquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch(error) {
        console.log(error)
    } finally {
        console.log('finalizou!')
    }
}

buscarAquivo()