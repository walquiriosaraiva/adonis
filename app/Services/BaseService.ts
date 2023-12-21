class BaseService {
  public maskCpf = function (nu_cpf: string) {
    return nu_cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }

  public maskPisPasep = function (nu_pis_pasep: string) {
    return nu_pis_pasep.replace(/(\d{3})(\d{5})(\d{2})(\d{1})/g, '$1.$2.$3-$4')
  }

  public removerAcentos(string: string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  public formatDate(date: Date) {
    return new Date(date).toLocaleDateString('pt-BR')
  }

  public formatterValue = function (value: number) {
    return new Intl.NumberFormat('pt-br', {
      minimumFractionDigits: 2,
    }).format(value)
  }

  public status = function (status: boolean) {
    if (status) {
      return 'Sim'
    }

    return 'Não'
  }
}

export default BaseService
