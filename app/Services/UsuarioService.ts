import UsuarioRepository from "App/Repositories/UsuarioRepository"

class UsuarioService {
  public async buscarUsuario({ request }, { response }) {
    try {
      const repository = new UsuarioRepository()

      const usuario = await repository.buscarUsuario({ request })

      return response.status(200).json(usuario)

    } catch (e) {
      return response.status(400).json({
        message: 'Erro na consulta',
        usuario: e.message,
      })
    }
  }
}

export default UsuarioService
