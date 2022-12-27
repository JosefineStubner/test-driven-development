import { useState } from 'react';

const RegisterUser = () => {
	const [buttonDisable, setButtonDisable] = useState(true);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onChangePasswordHandler = (e) => {
		const value = e.target.value;
		setPassword(value);
		setButtonDisable(value !== confirmPassword);
	};

	const onChangeConfirmPasswordHandler = (e) => {
		const value = e.target.value;
		setConfirmPassword(value);
		setButtonDisable(value !== password);
	};

	const onSave = (e) => {
		e.preventDefault();
		const body = { userName, email };

		fetch('http://localhost:3010/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
	};

	return (
		<section data-testid="register-user-component" className="container">
			<h1 className="page-title">Register User</h1>
			<form onSubmit={onSave}>
				<div className="form-control">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						placeholder="username"
						value={userName}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						placeholder="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						placeholder="password"
						value={password}
						onChange={onChangePasswordHandler}
					/>{' '}
				</div>
				<div className="form-control">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Confirm password"
						value={confirmPassword}
						onChange={onChangeConfirmPasswordHandler}
					/>
				</div>
				<div className="form-control">
					<button disabled={buttonDisable}>Register user</button>
				</div>
			</form>
		</section>
	);
};

export default RegisterUser;
