// initial state
const initialState = {
  currentDeck: false,
}

// reducer
export default function CardsBoardReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'STORE_DEFAULT_DECK':
      return { ...state, currentDeck: action.payload };
    case 'REMOVE_CARD':
      return {
        ...state,
        currentDeck: state.currentDeck.filter(item => item._id !== action.payload)
      };
    default:
      return state;
  }
}

// actions
export const storeInitialDeck = (deck) => ({
  type: 'STORE_DEFAULT_DECK',
  payload: deck
});

export const removeCard = (id) => ({
  type: 'REMOVE_CARD',
  payload: id
});

// selectors
export const currentDeckSelector = (state) => state.CardsBoardReducer.currentDeck;
