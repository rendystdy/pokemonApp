'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pokemons
 */

const Pokemon = use('App/Models/Pokemon')
const Database = use('Database')

class PokemonController {
  /**
   * Show a list of all pokemons.
   * GET pokemons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pokemon = await Pokemon.query().with('category').with('types').fetch()

    return pokemon
    // const pokemon = await Pokemon.all()

    // response.status(200).json({
    //   message: 'Here are your projects.',
    //   data: pokemon
    // })

  }

  /**
   * Render a form to be used for creating a new pokemon.
   * GET pokemons/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    // const { name, image_url, category_id, types_id, latitude, longitude } = request.post()

    // const pokemon = await Pokemon.create({
    //   name, image_url, category_id, latitude, longitude
    // })

    // if (types_id) {
    //   await pokemon.types().attach(types_id)
    //   pokemon.types = await pokemon.types().fetch()
    // }

    // return pokemon
  }

  /**
   * Create/save a new pokemon.
   * POST pokemons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name, image_url, category_id, types_id, latitude, longitude } = request.post()

    const pokemon = await Pokemon.create({ name, image_url, category_id, latitude, longitude })

    if (types_id && types_id.length > 0) {
      await pokemon.types().attach(types_id)
      pokemon.types = await pokemon.types().fetch()
    }

    response.status(201).json({
      message: 'Successfully created a new pokemon.',
      data: pokemon
    })
  }

  /**
   * Display a single pokemon.
   * GET pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    // const pokemon = await Pokemon.find(params.id)

    const pokemon = await Pokemon.query().with('category').with('types').where('id', params.id).fetch()

    return pokemon

    // versi ke 2
    // const { project } = request.post()

    // const tags = await project.tags().fetch()

    // project.tags = tags

    // response.status(200).json({
    //   message: 'Here is your project.',
    //   data: pokemon
    // })
  }

  /**
   * Render a form to update an existing pokemon.
   * GET pokemons/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pokemon details.
   * PUT or PATCH pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {

    // const { name, image_url, category_id, types_id, latitude, longitude } = request.post()
    const pokemon = await Pokemon.find(params.id)

    const { name, image_url, category_id, latitude, longitude, types_id } = request.all()

    pokemon.name = name
    pokemon.image_url = image_url
    pokemon.category_id = category_id
    pokemon.latitude = latitude
    pokemon.longitude = longitude

    await pokemon.save()

    if (types_id && types_id.length > 0) {
      await pokemon.types().detach()
      await pokemon.types().attach(types_id)
      pokemon.types = await pokemon.types().fetch()
    }

    response.status(200).json({
      message: 'Successfully updated this pokemon.',
      data: pokemon
    })
  }

  /**
   * Delete a pokemon with id.
   * DELETE pokemons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const pokemon = await Pokemon.findBy('id', params.id)
    pokemon.delete()

    response.status(200).json({
      message: 'Successfully deleted this project.',
      deleted: true
    })
  }
}

module.exports = PokemonController
