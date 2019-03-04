'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')
const User = use('App/Models/User')

class UserSeeder {
  async run() {
    //menggunakan user factory
    const usersArray = await Factory
      .model('App/Models/User')
      .createMany(5)

    // menggunakan User model
    // const user = new User()
    // user.username = 'ahmadarif'
    // user.email = 'ahmad.arif019@gmail.com'
    // user.password = '123'

    // await usersArray.save()
  }
}

module.exports = UserSeeder
