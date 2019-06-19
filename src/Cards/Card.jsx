import React from 'react';

import('./card.css');


class Card extends React.PureComponent {
  render() {
    return (<div class="card">
      {this.props.name}
    </div>);
  }
}

export default Card;
