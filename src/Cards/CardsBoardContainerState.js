// initial state
const initialState = {
  initialDeck: null,
  currentDeck: null,
}

// reducer
export default function CardsBoardReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'STORE_DEFAULT_DECK':
      return { ...state, initialDeck: action.payload };
    case 'UPDATE_CURRENT_DECK':
      return {
        ...state,
        currentDeck: state.currentDeck.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
}

// actions
export const storeDefaultDeck = (deck) => ({
  type: 'TOGGLE_REMEMBER_CREDENTIALS',
  payload: deck
});

// selectors
export const defaultDeckSelector = (state) => state.initialDeck;

export const currentDeckSelector = (state) => state.currentDeck;
