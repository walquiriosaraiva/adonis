import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsuarioService from 'App/Services/UsuarioService'

export default class UsuarioController {

  public async buscarUsuario({ request, response }: HttpContextContract) {
    return new UsuarioService().buscarUsuario({ request }, { response })
  }

}
