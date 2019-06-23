import React from 'react';

import('./card.css');

class Card extends React.PureComponent {
	constructor(props) {
		super(props);

		this.removeCardStarts = this.removeCardStarts.bind(this);
	}

	removeCardStarts() {
		if (window.confirm('Are you sure?')) {
			this.props.removeCard();
		}
	}

	render() {
		const { cardInfo, goToEdit } = this.props;
		return (
			<div className="cardContainer">
				{cardInfo.name}
				<div
					className="card"
					style={{ backgroundImage: `url(${cardInfo.imageUrl})` }}
				/>
				<div className="buttonsContainer">
					<button onClick={this.removeCardStarts}> REMOVE</button>
					<button onClick={goToEdit}> EDIT</button>
				</div>
			</div>
		);
	}
}

export default Card;
