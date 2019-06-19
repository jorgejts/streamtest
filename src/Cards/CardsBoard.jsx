import React from 'react';

import Card from './Card';
import('./cards-board.css');

class CardsBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.getDefaultDeck = this.getDefaultDeck.bind(this);
  }
  
  getDefaultDeck(url) {
    
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((cards) => (this.props.storeDefaultDeck(cards)))
        .catch(() => {console.error('error')});
    
  }
  
  componentDidMount() {
    this.getDefaultDeck('https://swapi.co/api/people/1/');
    if(!this.props.defaultDeck){
    }
  }

  render() {
    const {defaultDeck, currentDeck} = this.props;
    return (
      <div className="cards-board">
        {defaultDeck?'hay':'no hay'}
        {currentDeck}
      </div>
    )
  }
}

export default CardsBoard;
