import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BaseModelEFolha extends BaseModel {
  @column()
  public in_ativo: boolean

  @column()
  public ds_status: string

  @column()
  public dt_cadastro_formatado: string

  @column()
  public dt_inicio_vigencia_formatada: string

  @column()
  public dt_fim_vigencia_formatada: string

  @column()
  public dt_exclusao_formatado: string

  public status = function () {
    if (this.in_ativo) {
      return (this.ds_status = 'Sim')
    }

    return (this.ds_status = 'Não')
  }

  public formatterValue = function (value: number) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value)
  }
}
