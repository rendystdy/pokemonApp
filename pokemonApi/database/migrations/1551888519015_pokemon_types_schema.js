'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonTypesSchema extends Schema {
  up () {
    this.table('pokemon_types', (table) => {
      // alter table
      this.rename('pokemon_types', 'pokemon_type')
    })
  }

  down () {
    this.table('pokemon_types', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PokemonTypesSchema
