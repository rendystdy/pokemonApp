'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema

// table.string('title').notNullable().unique()
// table.string('image_url').notNullable()
// table.text('description').notNullable()
// table.string('author').notNullable()
// table.string('video_url').notNullable()