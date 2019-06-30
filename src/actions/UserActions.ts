// Import redux types
import {  Dispatch } from 'redux';
import axios from 'axios';

// Import User Typing
import { IUser } from '../reducers/userReducer';

// Create Action Constants
export enum UserActionTypes {
	GET_ALL = 'GET_ALL',
}

// Interface for Get All Action Type
export interface IUserGetAllAction {
	type: UserActionTypes.GET_ALL;
	users: IUser[];
}

/*
Note: if more than one action type, then combine with union
example: export type UserActions = IUserGetAllAction | IUserOtherAction
*/
export type UserActions = IUserGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action>
*/
export const getAllUsers = (): any => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			dispatch({
				users: response.data,
				type: UserActionTypes.GET_ALL,
			});
		} catch (err) {
			console.error(err);
		}
	};
};
