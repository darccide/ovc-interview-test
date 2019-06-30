import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../store/Store';

import { IUser } from '../reducers/userReducer';

// Create the container interface
interface IProps {
	users: IUser[];
}

class UserTable extends React.Component<IProps> {
	render() {
		const { users } = this.props;
		return (
			<div>
				<table>
					<thead>
						<tr>
							<td className="user-name">Name</td>
							<td className="user-email">Email</td>
							<td className="user-city">City</td>
							<td className="user-company">Company</td>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map(user => {
								return (
									<tr key={user.id}>
										<td className="user-name">{user.name}</td>
										<td className="user-email">
											<a href={`mailto:${user.email}`}>{user.email}</a>
										</td>
										<td className="user-city">{user.address.city}</td>
										<td className="user-company">{user.company.name}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		);
	}
}

// Grab the users from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
	return {
		users: store.userState.users,
	};
};

export default connect(mapStateToProps)(UserTable);
