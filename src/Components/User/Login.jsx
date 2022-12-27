import { useState } from 'react';

const Login = () => {
	const [buttonDisable, setButtonDisable] = useState(true);
	const [userInput, setUserInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	const onChangeUserInputHandler = (e) => {
		const value = e.target.value;
		setUserInput(value);
		// setButtonDisable(value && !passwordInput);
    if (value.length > 0 && passwordInput.length > 0)
		{
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    };
	};

	const onChangePasswordInputHandler = (e) => {
		const value = e.target.value;
		setPasswordInput(value);
		// setButtonDisable(value && !userInput);
		// setButtonDisable(value.length > 0 && userInput.length > 0);
    if (value.length > 0 && userInput.length > 0)
		{
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    };
	};

	return (
		<div>
      <h1>Login Page</h1>
			<label htmlFor="userInput">User</label>
			<input
				type="text"
				id="userInput"
				value={userInput}
				onChange={onChangeUserInputHandler}
			/>
			{/* <label htmlFor="email">Email</label>
    <input type="email" id="email" /> */}
			<label htmlFor="password">Password</label>
			<input
				type="password"
				id="password"
				value={passwordInput}
				onChange={onChangePasswordInputHandler}
			/>

			<button disabled={buttonDisable}>Login</button>
		</div>
	);
};

export default Login;
