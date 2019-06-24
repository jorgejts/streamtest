import store from '../store';
import { initialState as cardsBoardState } from '../Cards/CardsBoardContainerState';

export const initialState = store.getState();

export const createAppState = ({ CardsBoardReducer } = {}) => ({
	CardsBoardReducer: { ...cardsBoardState },
});
