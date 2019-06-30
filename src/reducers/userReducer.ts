import { UserActionTypes } from '../actions/UserActions';

// Define the User type
export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

// Define the User State
export interface IUserState {
	readonly users: IUser[];
}

// Define the initial state
const initialUserState: IUserState = {
	users: [],
};

export default function(state = initialUserState, action: { type: any; users: any }) {
	switch (action.type) {
		case UserActionTypes.GET_ALL: {
			return {
				...state,
				users: action.users,
			};
		}
		default:
			return state;
	}
}
