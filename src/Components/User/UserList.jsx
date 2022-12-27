import { useEffect, useState } from 'react';

const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3010/users')
			.then((response) => response.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<section data-testid="user-list-component" className="container">
			<h2 className='page-title'>OurUsers</h2>
			<ul>
				{users.map((user) => (
					<li key={user.userId}>
						{user.userName} - {user.email}
					</li>
				))}
			</ul>
		</section>
	);
};

export default UserList;
