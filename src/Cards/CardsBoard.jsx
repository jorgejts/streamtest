import React from 'react';

import Card from './Card';
import initialDeckJson from '../resources/cards';

import('./cards-board.css');


class CardsBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.getDefaultDeck = this.getDefaultDeck.bind(this);
  }

  getDefaultDeck(url) {

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return initialDeckJson;
      })
      .then((cards) => { this.props.storeInitialDeck(cards) })
      .catch((error) => { console.error(error) });

  }

  componentDidMount() {
    if (!this.props.currentDeck) {
      this.getDefaultDeck('https://swapi.co/api/people/1/');
    }
  }

  render() {
    const { currentDeck, removeCard } = this.props;
    return (
      <div className="cards-board">
        {currentDeck && currentDeck.map(cardInfo => <Card name={cardInfo.name} removeCard={() => removeCard(cardInfo._id)} key={cardInfo._id} />)}
      </div>
    )
  }
}

export default CardsBoard;
