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
		this.setState({ name: value });
	}

	changeUrl(event) {
		const { value } = event.target;
		this.setState({ imageUrl: value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const { name, imageUrl } = this.state;
		this.props.updateCard({ ...this.props.cardToEdit, name, imageUrl });
		this.props.history.push('/');
	}

	render() {
		let { name, imageUrl } = this.state;

		const isEnabled = name.length > 0 && imageUrl.length > 0;
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							value={this.state.name}
							onChange={this.changeName}
							required
						/>
					</label>
					<label>
						image url:
						<input
							type="text"
							value={this.state.imageUrl}
							onChange={this.changeUrl}
							required
						/>
					</label>
					<input disabled={!isEnabled} type="submit" value="Submit" />
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
