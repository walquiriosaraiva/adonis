import { BaseTask } from 'adonis5-scheduler/build'
import Logger from '@ioc:Adonis/Core/Logger'

export default class ExemploTask extends BaseTask {
  public static get schedule() {
    /**
     * a cada minuto executar
     */
    return '* * * * *'
  }

  /**
   * Set enable use .lock file for block run retry task
   * Lock file save to `build/tmpTaskLock`
   */
  public static get useLock() {
    return false
  }

  public async handle() {
    const date = new Date()
    const ultimoDiaMes = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    const primeiroDiaMes = new Date(date.getFullYear(), date.getMonth(), 1)

    Logger.info('schedule ExemploTask executada com sucesso a cada minuto, ultimoDiaMes: ' + ultimoDiaMes + ' - primeiroDiaMes: ' + primeiroDiaMes)

  }
}
