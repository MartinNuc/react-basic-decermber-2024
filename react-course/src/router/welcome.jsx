/**
 * Zvire
 * 
 * - eat
 * - sleep
 * - die
 * - getOlder
 */

import { useReducer } from "react"

const initialZvire = {
  hungry: true,
  age: 0,
  rested: false,
  alive: true
}

function zvireReducer(state, action) {
  switch (action.type) {
    case 'eat':
      if (!state.alive) { return state; }
      return {
        ...state,
        hungry: false
      }
    case 'sleep':
      if (!state.alive) { return state; }
      return {
        ...state,
        rested: true,
        hungry: true
      }
    case 'getOlder':
      if (state.age > 10) {
        return {
          ...state,
          alive: false
        }
      }
      return {
        ...state,
        age: state.age + 1,
      }
  }
}

export const Welcome = () => {
  const [state, dispatch] = useReducer(zvireReducer, initialZvire);

  return <div>
    <pre>{JSON.stringify(state, null, 2)}</pre>
    <button onClick={() => dispatch({type: 'eat'})}>Eat</button>
    <button onClick={() => dispatch({type: 'sleep'})}>Sleep</button>
    <button onClick={() => dispatch({type: 'getOlder'})}>Get older</button>
    <h1>Welcome to our page!!</h1>
  </div>
}