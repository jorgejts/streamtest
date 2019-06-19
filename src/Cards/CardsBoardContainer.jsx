import * as React from 'react';
import { connect } from 'react-redux';

import CardsBoard from './CardsBoard';
import { defaultDeckSelector, currentDeckSelector, storeDefaultDeck } from './CardsBoardContainerState';



const mapStateToProps = (state) => ({
  defaultDeck: defaultDeckSelector(state),
  currentDeck: currentDeckSelector(state),
});

const mapDispatchToProps = {
  storeDefaultDeck
};

const CardsBoardContainer = (props) => <CardsBoard {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsBoardContainer);
