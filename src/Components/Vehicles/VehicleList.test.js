import { render, screen } from '@testing-library/react';

import VehicleList from './VehicleList';

describe('VehicleList component', () => {
	const setup = () => render(<VehicleList />);

	describe('should have a page layout', () => {
		test('with a page title', () => {
			setup();
			const title = screen.getByRole('heading');
			//Act
			//Assert
			expect(title).toBeInTheDocument();
		});

		test('with a title of Vehicles in Storage', () => {
			setup();
			const title = screen.getByRole('heading');
			//Act
			//Assert
			expect(title).toHaveTextContent(/Vehicles in Storage/i);
		});
	});

	//Rekommenderas att inte göra mot riktig server pga belastningen samt risker för ex radera databas.
	//Integrationstest eftersom vi är beroende av externt api.
	describe('VehicleList api request', () => {
		test('renders list of vehicles if request is succesful', async () => {
			//Arrange
			setup();

			//Ta över kontrollen på fetch-anropet.
			//Här skapar vi en mock-function via jest.fn
			// window.fetch = jest.fn();
			// window.fetch.mockResolvedValueOnce({
			// 	json: async () => [
			// 		{
			// 			vehicleId: 1859,
			// 			registrationNumber: 'AL73738',
			// 			vinNumber: 'TMBAG9NE6E0061014',
			// 			manufacturer: 'SKODA',
			// 			model: 'OCTAVIA',
			// 			vehicleName: 'SKODA OCTAVIA 1.6 TDI 105 HK Hatchback',
			// 		},
			// 	],
			// });

			//Find jobbar asynkront, obs sätt await framför och async uppe i funktionen.
			const vehicles = await screen.findAllByRole('listitem');
			//Act

			//Assert
			expect(vehicles).not.toHaveLength(0);
		});
	});
});
