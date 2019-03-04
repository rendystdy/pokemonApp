'use strict'

/*
|--------------------------------------------------------------------------
| PokemonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
// const Hash = use('Hash')
const Pokemon = use('App/Models/Pokemon')

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

class PokemonSeeder {
  async run () {
    const pokemon = new Pokemon()
    pokemon.name = 'Psyduck'
    pokemon.image_url = 'https://assets.pokemon.com/static2/_ui/img/chrome/external_link_bumper.png'
    pokemon.latitude = '1233433'
    pokemon.longitude = '-2233423'
    await category.save()
  }
}

module.exports = PokemonSeeder
