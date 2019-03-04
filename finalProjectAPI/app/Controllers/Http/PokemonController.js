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
    // await Database
    //   .table('Pokemon')
    //   .innerJoin('types', 'user.id', 'accounts.user_id')

    return await Pokemon.all()
  }

  async details({ params, view, request, response }) {
    // return await Pokemon.find(params.id)
      // return await Database
      //   .table('pokemons')
      //   .where(params.id)
      //   .first()
      const pokemon = await Database.from('pokemons')
      .where({ id: params.id })
      .first()

      return pokemon
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
    const pokemon = await Pokemon.create((request.all()))

    return {
      status: 'Success',
      data: pokemon
    }
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
    const { id } = params
    const pokemon = await Pokemon.find(id)

    const { name, image_url, idtypes, idcategory, latitude, longitute } = request.all()

    pokemon.name = name
    pokemon.image_url = image_url
    pokemon.idtypes = idtypes
    pokemon.idcategory = idcategory
    pokemon.latitude = latitude
    pokemon.longitute = longitute


    await pokemon.save()

    // const order = await Database
    // .table('orders')
    // .where('id', params.id)
    // .update(request.all())

    return {
      status: 'Success',
      data: pokemon
    }
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
    const pokemon = await Pokemon.find(params.id)

    pokemon.delete()
    // return await products.delete()
    return {
      status: 'success delete',
      data: pokemon
    }
  }
}

module.exports = PokemonController
