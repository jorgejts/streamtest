import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import { createAppState } from './utils/state-utils';
import App from './App';

const setup = overrideState =>
	configureStore()(createAppState({ ...overrideState }));

it('renders without crashing', () => {
	const div = document.createElement('div');
	const store = setup();
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>,
		div,
	);
	ReactDOM.unmountComponentAtNode(div);
});
