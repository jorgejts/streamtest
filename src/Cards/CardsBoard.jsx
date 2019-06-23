import * as React from 'react';

import Card from './Card';
import initialDeckJson from '../resources/cards';

import('./cards-board.css');

class CardsBoard extends React.Component {
	constructor(props) {
		super(props);

		this.getDefaultDeck = this.getDefaultDeck.bind(this);
		this.filterCards = this.filterCards.bind(this);
		this.goToEdit = this.goToEdit.bind(this);
	}

	getDefaultDeck(url) {
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return initialDeckJson;
			})
			.then(cards => {
				this.props.storeInitialDeck(cards);
			})
			.catch(error => {
				console.error(error);
			});
	}

	filterCards(event) {
		const value = (event && event.target.value).toLowerCase() || '';
		if (value) {
			this.props.setFilter(value);
		} else {
			this.props.setFilter('');
		}
	}

	goToEdit(cardInfo) {
		this.props.storeCardToEdit(cardInfo);
		this.props.history.push('/edit');
	}

	renderCard(cardInfo) {
		const { removeCard } = this.props;
		return (
			<Card
				cardInfo={cardInfo}
				removeCard={() => removeCard(cardInfo._id)}
				goToEdit={() => this.goToEdit(cardInfo)}
				key={cardInfo._id}
			/>
		);
	}

	componentDidMount() {
		if (this.props.initialDeck.length === 0) {
			this.getDefaultDeck('https://swapi.co/api/people/1/');
		}
	}

	render() {
		const { currentDeck, initialDeck, storeCurrentDeck, filter } = this.props;

		if (currentDeck.length === 0) {
			storeCurrentDeck(initialDeck);
		}
		// if (cardToEdit) {
		// 	this.props.history.push('/edit');
		// }

		return (
			<React.Fragment>
				<input type="text" onChange={this.filterCards} value={filter} />
				<button onClick={() => storeCurrentDeck(initialDeck)}>Restore</button>
				<div className="cards-board">
					{!filter
						? currentDeck &&
						  currentDeck.map(cardInfo => this.renderCard(cardInfo))
						: currentDeck &&
						  currentDeck
								.filter(card => card.name.toLowerCase().includes(filter))
								.map(cardInfo => this.renderCard(cardInfo))}
				</div>
			</React.Fragment>
		);
	}
}

export default CardsBoard;
