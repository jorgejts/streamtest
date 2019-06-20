import React from 'react';

import('./card.css');



class Card extends React.PureComponent {

  render() {
    const { name, removeCard } = this.props;
    return (<div className="card">
      {name}

      <button onClick={removeCard}> REMOVE</button>
    </div>);
  }
}

export default Card;
