import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EditCard from './EditCard';
import { cardToEditSelector, updateCard } from '../Cards/CardsBoardContainerState';

const mapStateToProps = state => ({
	cardToEdit: cardToEditSelector(state),
});

const mapDispatchToProps = {
	updateCard,
};

const EditCardContainer = props => <EditCard {...props} />;

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(EditCardContainer),
);
