import * as React from 'react';
import * as ReactDOM from 'react-dom';

/* Make the store available to all container components in the application without explicitly passing it
 */
import { Provider } from 'react-redux';

// Store type form Redux
import { Store } from 'redux';

// Import the store function and state
import configureStore, { IAppState } from './store/Store';
import { getAllUsers } from './actions/UserActions';

import './index.css';
import App from './components/App';

interface IProps {
	store: Store<IAppState>;
}

/*
Create a root component that receives the store via props and wraps the App component with Provider, giving props to containers
*/
const Root: React.FC<IProps> = props => {
	return (
		<Provider store={props.store}>
			<App />
		</Provider>
	);
};

// Generate the store
const store = configureStore();
store.dispatch(getAllUsers());

//Render the App
ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement);
