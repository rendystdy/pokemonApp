'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonTypesSchema extends Schema {
  up () {
    this.create('pokemon_types', (table) => {
      table
      .integer('pokemon_id')
      .unsigned()
      .index('pokemon_id')
      table
      .integer('type_id')
      .unsigned()
      .index('type_id')
      table
      .foreign('pokemon_id')
      .references('pokemons.id')
      .onDelete('cascade')
      table
      .foreign('type_id')
      .references('types.id')
      .onDelete('cascade')
    })
  }

  down () {
    this.drop('pokemon_types')
  }
}

module.exports = PokemonTypesSchema
