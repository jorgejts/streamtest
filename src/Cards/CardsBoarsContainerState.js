
const initialState = {

}

export default function CardsBoardReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'GET_DEFAULT_DECK':
      return { ...state, initialDeck: action.payload };
    case 'GET_CURRENT_DECK':
      return {
        ...state,
        currentDeck: state.currentDeck.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
}
