import React from 'react';

import Card from './Card';
import initialDeckJson from '../resources/cards';
import { filter } from 'rsvp';

import('./cards-board.css');


class CardsBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { deck: [] };

    this.getDefaultDeck = this.getDefaultDeck.bind(this);
    this.filterCards = this.filterCards.bind(this);
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

  filterCards(event) {
    const value = event && event.target.value || '';
    console.log(value)
    if (value.length >= 3) {
      this.setState({ deck: this.props.currentDeck.find(card => card.name.includes(value)) });
    } else {
      this.setState({ deck: this.props.currentDeck });
    }
  }

  componentDidMount() {
    if (!this.props.currentDeck) {
      this.getDefaultDeck('https://swapi.co/api/people/1/');
    }
  }

  render() {
    const { currentDeck, removeCard } = this.props;
    let { deck } = this.state;
    console.log(deck)
    return (
      <React.Fragment>
        <input type="text" onChange={this.filterCards} />
        <div className="cards-board">
          {deck ? deck.map(
            cardInfo => <Card name={cardInfo.name} removeCard={() => removeCard(cardInfo._id)} key={cardInfo._id} />
          ) : currentDeck.map(
            cardInfo => <Card name={cardInfo.name} removeCard={() => removeCard(cardInfo._id)} key={cardInfo._id} />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default CardsBoard;
