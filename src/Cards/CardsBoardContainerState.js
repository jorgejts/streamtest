// initial state
const initialState = {
	currentDeck: [],
	initialDeck: [],
	cardToEdit: null,
	filter: '',
};

// reducer
export default function CardsBoardReducer(state = initialState, action) {
	switch (action.type) {
		case 'STORE_INITIAL_DECK':
			return { ...state, initialDeck: action.payload };
		case 'STORE_CURRENT_DECK':
			return { ...state, currentDeck: action.payload };
		case 'REMOVE_CARD':
			return {
				...state,
				currentDeck: state.currentDeck.filter(
					card => card._id !== action.payload,
				),
			};
		case 'SET_FILTER':
			return { ...state, filter: action.payload };
		case 'STORE_CARD_TO_EDIT':
			return { ...state, cardToEdit: action.payload };
		case 'UPDATE_CARD':
			return {
				...state,
				currentDeck: [
					...state.currentDeck.filter(card => card._id !== action.payload._id),
					action.payload,
				],
				cardToEdit: null,
			};
		default:
			return state;
	}
}

// actions
export const storeInitialDeck = deck => ({
	type: 'STORE_INITIAL_DECK',
	payload: deck,
});

export const storeCurrentDeck = deck => ({
	type: 'STORE_CURRENT_DECK',
	payload: deck,
});

export const removeCard = id => ({
	type: 'REMOVE_CARD',
	payload: id,
});

export const setFilter = value => ({
	type: 'SET_FILTER',
	payload: value,
});

export const storeCardToEdit = cardInfo => ({
	type: 'STORE_CARD_TO_EDIT',
	payload: cardInfo,
});

export const updateCard = cardInfo => ({
	type: 'UPDATE_CARD',
	payload: cardInfo,
});

// selectors
export const currentDeckSelector = state =>
	state.CardsBoardReducer.currentDeck.sort((a, b) =>
		a._id > b._id ? 1 : b._id > a._id ? -1 : 0,
	);
export const initialDeckSelector = state => state.CardsBoardReducer.initialDeck;
export const filterSelector = state => state.CardsBoardReducer.filter;
export const cardToEditSelector = state => state.CardsBoardReducer.cardToEdit;
