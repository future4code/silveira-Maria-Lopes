import axios from 'axios'
import { baseURL } from './baseURL'

async function createNews(title: string, content: string, date: number): Promise<void> {
    await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    });
}

// a) é uma função nomeada assíncrona, pois contem uma expressão await , que pausa a execução da função assíncrona
//    e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.

const main = async () => {
    try {
        const noticias = createNews("Fake news: Uma verdade inquietante", "Bolsonaro é “líder e porta-voz” das ‘fake news’ no país, diz relatório final da CPI da Pandemia", 10/10/2021)
            .then(console.log)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}
main()