import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Login from './Login';

describe('Login component', () => {
	//Username
	test('has username/email input', () => {
		//Arrange
		render(<Login />);
		const userInput = screen.getByLabelText('User');

		//Act
		//Assert
		expect(userInput).toBeInTheDocument;
	});

	//Email
	// test('has user email input', () => {
	// 	//Arrange
	// 	render(<Login />);
	// 	const emailInput = screen.getByLabelText('Email');

	// 	//Act
	// 	//Assert
	// 	expect(emailInput).toBeInTheDocument;
	// 	expect(emailInput.type).toBe('email');
	// });

	//Password
	test('has user password input', () => {
		//Arrange
		render(<Login />);
		const passwordInput = screen.getByLabelText('Password');

		//Act
		//Assert
		expect(passwordInput).toBeInTheDocument();
		expect(passwordInput.type).toBe('password');
	});

	//Button
	test('has login button', () => {
		//Arrange
		render(<Login />);
		const loginButton = screen.getByRole('button', { name: 'Login' });

		//Act
		//Assert
		expect(loginButton).toBeInTheDocument();
	});

	//Disabled button
	test('button to be disabled initially', () => {
		//Arrange
		render(<Login />);
		const disabledButton = screen.getByRole('button', { name: 'Login' });

		//Act
		//Assert
		expect(disabledButton).toBeInTheDocument();
		expect(disabledButton).toBeDisabled();
	});

	describe('form interactions', () => {
		test('button to be enabled when user and password fields have content', async () => {
			//Arrange
			render(<Login/>)
			const userInput = screen.getByLabelText('User');
			const passwordInput = screen.getByLabelText('Password');
			const loginButton = screen.getByRole('button', {name: 'Login'});

			//Act
			await userEvent.type(userInput, 'Carl Bildt');
			await userEvent.type(passwordInput, 'Pa$$w0rd');

			//Assert
			expect(loginButton).toBeEnabled();
		})
	})
});

// Egen komponent
// Login

// username
// email
// password

// login button (disabled)
