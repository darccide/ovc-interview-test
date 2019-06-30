import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions/UserActions';
import moxios from 'moxios';
import { getUserMock } from '../__mock__/getUserMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User actions', () => {
	beforeEach(() => moxios.install());
	afterEach(() => moxios.uninstall());

	it('fetches data from OVC provided api', async done => {
		const { users } = getUserMock;
		moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
			status: 200,
			response: users,
		});

		const expectedActions = [{ type: actions.UserActionTypes.GET_ALL, users: users }];

		const store = mockStore({ users: [] });

		await store.dispatch(actions.getAllUsers()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
		done();
	});
});
