import React from 'react';

import('./card.css');



class Card extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            this.setState({ isLoading: false });
            return response;
        })
        .then((response) => response.json())
        .then((items) => this.setState({ items }))
        .catch(() => this.setState({ hasErrored: true }));
  }
  
  render() {
    return (<div className="card">
      {this.props.name}
    </div>);
  }
}

export default Card;
