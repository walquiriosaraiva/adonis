import { column } from '@ioc:Adonis/Lucid/Orm'
import BaseModelEFolha from './BaseModelEFolha'

export default class Usuario extends BaseModelEFolha {
  public static table = 'cordilheira.tb_usuario'

  @column({ isPrimary: true })
  public id_usuario: number

  @column()
  public id_pessoa: number

  @column()
  public no_email: string

  @column()
  public no_login: string

  @column()
  public no_login_mre: string

  @column()
  public no_usuario: string

  @column()
  public in_ativo: boolean
}
