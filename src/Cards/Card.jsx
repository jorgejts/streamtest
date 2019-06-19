import React from 'react';

import('./card.css');


class Card extends React.PureComponent {
  render() {
    return (<div className="card">
      {this.props.name}
    </div>);
  }
}

export default Card;
