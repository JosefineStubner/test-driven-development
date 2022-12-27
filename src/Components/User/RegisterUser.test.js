import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import RegisterUser from './RegisterUser';

//övergripande svit (här för komponenten)
describe('Register User Component', () => {
	const setup = () => render(<RegisterUser />);
	//det går att nästla på ett effektivt sätt, här describe inne i en describe

	//ny svit för användarsidan
	describe('Register User Page', () => {
		test.skip('has a title text saying Register User', () => {
			//Arrange
			// render(<RegisterUser/>);

			const { container } = render(<RegisterUser />);
			logRoles(container);

			const titleText = screen.getByRole('heading', {
				name: 'Register User',
			});
			//Act

			//Assert
			expect(titleText).toBeInTheDocument();
		});

		test('has a username input', () => {
			//Arrange
			render(<RegisterUser />);
			// const usernameInput = screen.getByPlaceholderText('username');

			const usernameInput = screen.getByLabelText('Username');
			//Nedan kod fungerar men bör inte användas.
			// const {container} = render(<RegisterUser/>);
			// const usernameInput = container.querySelector('input');
			//Act

			//Assert
			expect(usernameInput).toBeInTheDocument();
		});

		test('has an email input', () => {
			//Arrange
			render(<RegisterUser />);
			const emailInput = screen.getByLabelText('Email');

			//Act

			//Assert
			expect(emailInput).toBeInTheDocument();
		});

		test('has a password input', () => {
			//Arrange
			render(<RegisterUser />);
			const passwordInput = screen.getByLabelText('Password');

			//Act

			//Assert
			expect(passwordInput).toBeInTheDocument();
			expect(passwordInput.type).toBe('password');
		});

		test('has a confirm password input', () => {
			//Arrange
			render(<RegisterUser />);
			const confirmPasswordInput = screen.getByLabelText('Confirm Password');
			//Act

			//Assert
			expect(confirmPasswordInput).toBeInTheDocument();
			expect(confirmPasswordInput.type).toBe('password');
		});

		test('should gave a register button', () => {
			//Arrange
			render(<RegisterUser />);
			const registerButton = screen.getByRole('button', {
				name: /Register User/i,
			});

			//Act

			//Assert
			expect(registerButton).toBeInTheDocument();
		});

		test('register user button should be disabled initially', () => {
			//Arrange
			render(<RegisterUser />);
			const registerButton = screen.getByRole('button', {
				name: 'Register user',
			});

			//Act

			//Assert
			expect(registerButton).toBeDisabled();
		});
	});

	describe('Form interactions', () => {
		test('Register button should be enabled when password and confirm password matches', async () => {
			//Arrange
			setup();
			const passwordInput = screen.getByLabelText('Password');
			const confirmPasswordInput = screen.getByLabelText('Confirm Password');
			const registerButton = screen.getByRole('button', {
				name: 'Register user',
			});

			//Act
			await userEvent.type(passwordInput, 'Pa$$w0rd');
			await userEvent.type(confirmPasswordInput, 'Pa$$w0rd');

			//Assert
			expect(registerButton).toBeEnabled();
		});

		test('saves the user when "Register User"-button is clicked', async () => {
			//Arrange

			let requestBody;

			//Configure msw server
			const server = setupServer(
				rest.post('http://localhost:3010/users', (req, res, context) => {
					req.json().then((data) => (requestBody = data));
					return res(context.status(201));
				}),
			);

			//start listening
			server.listen();

			setup();
			const usernameInput = screen.getByLabelText('Username');
			const emailInput = screen.getByLabelText('Email');
			const passwordInput = screen.getByLabelText('Password');
			const confirmPasswordInput = screen.getByLabelText('Confirm Password');
			const registerButton = screen.getByRole('button', {
				name: 'Register user',
			});

			//Act
			await userEvent.type(usernameInput, 'Malin Gustavsson');
			await userEvent.type(emailInput, 'malin@gmail.com');
			await userEvent.type(passwordInput, 'Pa$$w0rd');
			await userEvent.type(confirmPasswordInput, 'Pa$$w0rd');

			await userEvent.click(registerButton);

			//Assert

			//await new Promise((resolve) => (setTimeout(resolve, 500)));

			expect(requestBody).toEqual({
				userName: 'Malin Gustavsson',
				email: 'malin@gmail.com',
			});
		});
	});
});
