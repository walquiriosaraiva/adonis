import BaseRepository from "./BaseRepository";
import Usuario from "App/Models/Usuario";

export default class UsuarioRepository extends BaseRepository {

    public async buscarUsuario({ request }) {
        let param = request.all()
        const usuario = Usuario.query()

        if (param.id_pessoa) {
            usuario.where('id_usuario', '=', param.id_pessoa)
        }

        return usuario
    }
}