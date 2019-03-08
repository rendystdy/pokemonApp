'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', async (faker) => {
//   return {
//     username: faker.username(),
//     email: faker.email(),
//     password: await Hash.make(faker.password())
//   }
// })

Factory.blueprint('App/Models/Category', async (faker) => {
   return {
     name: faker.username()
   }
 })

 Factory.blueprint('App/Models/Type', async (faker) => {
   return {
     name: faker.username()
   }
 })

 Factory.blueprint('App/Models/Pokemon', async (faker) => {
   return {
     name: faker.username(),
     image_url: faker.sentence(),
     latitude: faker.sentence(),
     longitude: faker.sentence()
   }
 })
