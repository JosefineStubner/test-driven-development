import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('render App component', () => {
  const setup = () => render(<App/>);

  test('navigating and rendering correct component', async () => {
    //Arrange
    setup();
    //const user = userEvent.setup();

    //Assert, test if we are on startpage
    expect(screen.getByText('Vehicles in Storage')).toBeInTheDocument();

    //Test if navigate to users page/component works.
    await userEvent.click(screen.getByText('Users'));
    expect(screen.getByText('Users')).toBeInTheDocument();

    //Test if navigating to RegisterUser psge/component
    await userEvent.click(screen.getByText('RegisterUser'));
    expect(screen.getByText('RegisterUser')).toBeInTheDocument();
  });
});

// describe('Routing', () => {
//   const setup = () => render(<App />);
//   test.each`
//     path          | componentTestId
//     ${'/'}        | ${'vehicle-list-component'}
//     ${'/users'}   | ${'user-list-component'}
//     ${'/registeruser'} | ${'register-user-component'}
//   `(
//     'display $componentTestId when path is $path',
//     ({ path, componentTestId }) => {
//       // Arrange
//       window.history.pushState({}, '', path);
//       setup();
//       const elem = screen.queryByTestId(componentTestId);

//       // Assert
//       expect(elem).toBeInTheDocument();
//     },
//   );

//   test.each`
//     path          | componentTestId
//     ${'/'}        | ${'user-list-component'}
//     ${'/users'}   | ${'vehicle-list-component'}
//     ${'/adduser'} | ${'vehicle-list-component'}
//     ${'/adduser'} | ${'user-list-component'}
//   `(
//     'does not display $componentTestId when path is $path',
//     ({ path, componentTestId }) => {
//       // Arrange
//       window.history.pushState({}, '', path);
//       setup();
//       const elem = screen.queryByTestId(componentTestId);

//       // Assert
//       expect(elem).not.toBeInTheDocument();
//     },
//   );
// });

// import { render, screen } from '@testing-library/react';
// import App from './App';

// describe('Routing', () => {
// 	test.each`
// 		path | componentTestId
// 		${'/'} | ${'vehicle-list-component'}
// 		${'/users'} | ${'user-list-component'}
// 	`
// 	('display $componentTestId when path is $path', () => {

// 	})
// })

// describe('App component', () => {
// 	test.skip('renders learn react link', () => {
// 		//Arrange...
// 		render(<App />);

// 		//Screen här motsvarar vår virtuella DOM (imiterar webbläsaren)
// 		//learn more react/i <- reg. expression. i-et efter betyder ignore case.
// 		//Man kan också skicka in en sträng, då känslig för små och stora bokstäver, se nedan.

// 		//Act...
// 		const linkElement = screen.getByText(/learn more react/i);

// 		//Assert...
// 		expect(linkElement).toBeInTheDocument();
// 	});
// });
