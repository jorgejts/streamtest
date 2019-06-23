import * as React from 'react';
import { withRouter } from 'react-router-dom';

import('../Cards/card.css');

class EditCard extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: props.cardToEdit.name,
			imageUrl: props.cardToEdit.imageUrl,
		};

		this.changeName = this.changeName.bind(this);
		this.changeUrl = this.changeUrl.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	changeName(event) {
		const { value } = event.target;
		if (value) {
			this.setState({ name: value });
		} else {
			this.setState({ name: this.props.cardToEdit.imageUrl });
		}
	}

	changeUrl(event) {
		const { value } = event.target;
		if (value) {
			this.setState({ imageUrl: value });
		} else {
			this.setState({ imageUrl: this.props.cardToEdit.imageUrl });
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		const { name, imageUrl } = this.state;
		this.props.updateCard({ ...this.props.cardToEdit, name, imageUrl });
		this.props.history.push('/');
	}

	render() {
		const { cardToEdit } = this.props;
		let { name, imageUrl } = this.state;

		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							value={this.state.name || cardToEdit.name}
							onChange={this.changeName}
						/>
					</label>
					<label>
						image url:
						<input
							type="text"
							value={this.state.imageUrl || cardToEdit.imageUrl}
							onChange={this.changeUrl}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
				<div className="cardContainer">
					{name}
					<div
						className="card"
						style={{ backgroundImage: `url(${imageUrl})` }}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(EditCard);
