'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('pokemons', 'PokemonController.index')
  Route.get('pokemons/:id', 'PokemonController.show')
  Route.post('pokemons', 'PokemonController.store')
  Route.patch('pokemons/:id', 'PokemonController.update')
  Route.delete('pokemons/:id', 'PokemonController.destroy')
}).prefix('api/v1/')