import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
//testfiler kan även heta namn.spec.js (kommer från Jasmin)

describe('Home Component', () => {
	// test kan även heta it, från jasmin. Då kan man skriva xit (för att hoppa över testet när man kör).
	test('button log in should be in the document', () => {
		//Arrange...
		render(<Home />);

		// const { container } = render(<Home />);
		// logRoles(container);
		const btn = screen.getByRole('button', { name: 'Logga In' });

		//Act...

		//Assert...
		expect(btn).toBeInTheDocument();
	});

	test('initial button color should be green', () => {
		//Arrange
		render(<Home />);
		const btn = screen.getByRole('button', { name: 'Logga In' });

		//Act

		//Assert
		expect(btn).toHaveStyle({ backgroundColor: 'green' });
	});

	test('button when clicked should say log out', () => {
		//Arrange
		render(<Home />);
		const btn = screen.getByRole('button', { name: 'Logga In' });

		//fireEvent simulerar att användaren trycker på knappen.
		//Act
		fireEvent.click(btn);

		//Assert
		expect(btn).toHaveTextContent('Logga Ut');
	});

	test('button when clicked should be red', () => {
		//Arrange
		render(<Home />);
		const btn = screen.getByRole('button', { name: 'Logga In' });

		//Act
		fireEvent.click(btn);

		//Assert
		expect(btn).toHaveStyle({ backgroundColor: 'red' });
	});
});
