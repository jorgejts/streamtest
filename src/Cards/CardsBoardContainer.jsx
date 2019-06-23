import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CardsBoard from './CardsBoard';
import {
	currentDeckSelector,
	initialDeckSelector,
	cardToEditSelector,
	filterSelector,
	storeInitialDeck,
	storeCurrentDeck,
	storeCardToEdit,
	setFilter,
	removeCard,
	updateCard,
} from './CardsBoardContainerState';

const mapStateToProps = state => ({
	currentDeck: currentDeckSelector(state),
	initialDeck: initialDeckSelector(state),
	cardToEdit: cardToEditSelector(state),
	filter: filterSelector(state),
});

const mapDispatchToProps = {
	storeInitialDeck,
	storeCurrentDeck,
	setFilter,
	removeCard,
	storeCardToEdit,
	updateCard,
};

const CardsBoardContainer = props => <CardsBoard {...props} />;

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(CardsBoardContainer),
);
