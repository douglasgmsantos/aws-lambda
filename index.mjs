import {log} from './log.mjs';

export const handler =  async(event) => {
    const jsonParsed = JSON.stringify(event)
    log('Log de execução' + jsonParsed);

    return {
        statusCode: 200,
        body: jsonParsed,
    }
}