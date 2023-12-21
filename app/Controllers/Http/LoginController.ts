import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'
import https from 'https'

export default class LoginController {
  public async getUnidadeAdm({ request, response }: HttpContextContract) {
    const { userName } = request.all()
    const token = request.header('Authorization')
    const baseURL = process.env.BASE_URL_CORPORATIVO
    const idSistema = process.env.ID_SISTEMA

    return await axios
      .get(`${baseURL}/usuario-grupo-unidade?noUsuario=${userName}&idSistema=${idSistema}`, {
        headers: {
          Authorization: `${token}`,
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .then((resp) => {
        return response.send(resp.data._embedded)
      })
  }
}
