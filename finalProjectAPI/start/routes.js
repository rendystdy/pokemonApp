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

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

Route.get('api/v1/pokemons', 'PokemonController.index' )
Route.post('api/v1/pokemon', 'PokemonController.store' )
Route.get('api/v1/pokemon/:id', 'PokemonController.details' )
Route.patch('api/v1/pokemon/:id', 'PokemonController.update' )
Route.delete('api/v1/pokemon/:id', 'PokemonController.destroy' )

Route.get('api/v1/categories', 'CategoryController.index' )
Route.post('api/v1/category', 'CategoryController.store' )
Route.get('api/v1/category/:id', 'CategoryController.details' )
Route.patch('api/v1/category/:id', 'CategoryController.update' )
Route.delete('api/v1/category/:id', 'CategoryController.destroy' )

Route.get('api/v1/types', 'TypeController.index' )
Route.post('api/v1/type', 'TypeController.store' )
Route.get('api/v1/type/:id', 'TypeController.details' )
Route.patch('api/v1/type/:id', 'TypeController.update' )
Route.delete('api/v1/type/:id', 'TypeController.destroy' )

Route.get('api/v1/register', 'RegisterController.create' )
Route.post('api/v1/register', 'RegisterController.store' )

Route.post('api/v1/login', 'LoginController.store' )
Route.post('api/v1/logout', 'LoginController.destroy' )
