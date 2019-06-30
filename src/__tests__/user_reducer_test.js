import * as reducer from '../reducers/userReducer';
import * as actions from '../actions/UserActions';
import { getUserMock } from '../__mock__/getUserMock';

describe('User Reducer', () => {
	const initialUserState = {
		users: [],
	};

	it('should return initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialUserState);
	});
	it('should handle UserActionTypes.GET_ALL', () => {
		expect(
			reducer([], {
				type: actions.UserActionTypes.GET_ALL,
				users: getUserMock,
			})
		).toEqual({});
	});
});
