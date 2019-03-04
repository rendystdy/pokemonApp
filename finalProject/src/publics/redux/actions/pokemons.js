import axios from "axios";

export const getPokemons = () => {
  return {
    type: 'GET_POKEMONS',
    payload: axios.get('http://192.168.0.23:3333/api/v1/pokemons')
  }
}

export const getPokemonDetail = (id) => {
  return {
    type: 'GET_POKEMON_DETAIL',
    payload: axios.get(`http://192.168.0.23:3333/api/v1/pokemon/${id}`)
  }
}

export const createPokemon = (body) => {
  return {
    type: 'CREATE_POKEMON',
    payload: axios({
      method: 'post',
      url: 'http://192.168.0.23:3333/api/v1/pokemon',
      data: body
    })
  }
}

export const updatePokemon = (id) => {
  return {
    type: 'UPDATE_POKEMON',
    payload: axios.patch(`http://192.168.0.23:3333/api/v1/pokemon/${id}`)
  }
}

export const deletePokemon = (id) => {
  // alert(JSON.stringify(id))
  return {
    type: 'DELETE_POKEMON',
    payload: axios({
      method: 'delete',
      url: `http://192.168.0.23:3333/api/v1/pokemon/${id}`,
    })
  }
}
