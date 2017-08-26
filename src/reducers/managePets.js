export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] }
    case 'REMOVE_PET':
      let filtered = state.pets.filter( pet => pet.id !== action.id )
      return { pets: filtered }
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let names = state.pets.map( pet => `<li>${pet.name}</li>` )
  let list = `<ul>${names}</ul>`
  document.getElementById('container').innerHTML = list
}
