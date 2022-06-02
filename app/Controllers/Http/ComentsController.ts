import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Moment from 'App/Models/Moment'
import Coment from 'App/Models/Coment'

export default class ComentsController {

  public async store({ request, params, response }: HttpContextContract) {

    const body = request.body()
    const momentId = params.momentId

    await Moment.findOrFail(momentId)

    body.momentId = momentId

    const coment = await Coment.create(body)

    response.status(201)

    return {
      message: "Comentário adicionado com sucesso!",
      data: coment,
    }

  }

}

