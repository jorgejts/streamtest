import * as React from 'react';
import { connect } from 'react-redux';

import CardsBoard from './CardsBoard';
import { currentDeckSelector, storeInitialDeck, removeCard } from './CardsBoardContainerState';

const mapStateToProps = (state) => ({
  currentDeck: currentDeckSelector(state),
});

const mapDispatchToProps = {
  storeInitialDeck,
  removeCard
};

const CardsBoardContainer = (props) => <CardsBoard {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsBoardContainer);
