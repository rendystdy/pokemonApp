'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
// const Hash = use('Hash')
const Category = use('App/Models/Category')

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

class CategorySeeder {
  async run () {
    // / menggunakan User model
    const category = new Category()
    category.name = 'Duck'
    await category.save()
  }
}

module.exports = CategorySeeder
