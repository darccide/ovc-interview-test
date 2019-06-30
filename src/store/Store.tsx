/* Imports from Redux:
  applyMiddleware: Applies middleware to the dispatch method of Redux store
  combineReducers: Merge reducers into one
  createStore: Creates Redux store to hold state tree
  Store: The Typescript Type used for the store
*/
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/* Redux Thunk
  allows for writing action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from 'redux-thunk';
// Import reducers and state type
import userReducer, { IUserState } from '../reducers/userReducer';

// Create an interface for the application state
export interface IAppState {
	userState: IUserState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
	userState: userReducer,
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
	const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
	return store;
}
