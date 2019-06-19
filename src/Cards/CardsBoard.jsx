import React from 'react';

import Card from './Card';
import('./cards-board.css');

class CardsBoard extends React.Component {
  render() {
    return (
      <div className="cards-board">
        <Card name="pacorl" />
        <Card name="pacorl" />
        <Card name="pacorl" />
        <Card name="pacorl" />
        <Card name="pacorl" />
        <Card name="pacorl" />
        <Card name="pacorl" />
      </div>
    )
  }
}

export default CardsBoard;
