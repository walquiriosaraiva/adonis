import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'
import https from 'https'

export default class Auth {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const token = request.header('Authorization')
    const baseURL = process.env.BASE_URL_CORPORATIVO
    const idSistema = process.env.ID_SISTEMA
    let resultado = { status: '', data: {}, message: '' }
    const userName = request.header('userName')

    await axios
      .get(`${baseURL}/usuario-grupo-unidade?noUsuario=${userName}&idSistema=${idSistema}`, {
        headers: {
          Authorization: `${token}`,
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .then((resp) => {
        resultado.data = resp.data._embedded
        resultado.message = 'Sucesso'
        resultado.status = String(resp.status)
      })
      .catch((error) => {
        resultado.message = error.message
        resultado.status = String(error.code)
      })

    if (resultado.status === 'ERR_BAD_REQUEST') {
      response.unauthorized({ error: 'Você não está autorizado' })
      return
    }

    await next()
  }
}
