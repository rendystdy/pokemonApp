'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
    pokemon () {
        return this.hasMany('App/Models/Pokemon')
      }
}

module.exports = Type
