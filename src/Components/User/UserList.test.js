import { render, screen } from "@testing-library/react";

import UserList from "./UserList";

describe('UserList component', () => {
  const setup = () => render(<UserList/>);

  describe('Component should have a page layout', () => {
    test('with a page title', () => {
      //Arrange
      setup();
      const title = screen.getByRole('heading');

      //Act
      //Assert
      expect(title).toBeInTheDocument();
    });

    test('with a title of "Users"', () => {
      //Arrange
      setup()
      const title = screen.getByRole('heading');

      //Act
      //Assert
      expect(title).toHaveTextContent('Users');
    })
  })

  describe('UserList api request', () => {
    test('renders list of users at successful api request', async () => {
      setup();
      const users = await screen.findAllByRole('listitem');

      expect(users).not.toHaveLength(0);
    })
  })
})