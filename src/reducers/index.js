export default function ingredientReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.payload]
    case 'REMOVE_INGREDIENT':
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
    default:
      return state
  }
}
