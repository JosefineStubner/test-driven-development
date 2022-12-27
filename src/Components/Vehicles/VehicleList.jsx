import { useEffect, useState } from "react";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3010/vehicles')
      .then((response) => response.json())
      .then((data) => setVehicles(data));
  }, []);

	return (
		<section data-testid='vehicle-list-component' className="container">
			<h1 className="page-title">Vehicles in Storage</h1>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.vehicleId}>
            {vehicle.manufacturer} - {vehicle.model}
          </li>
        ))}
      </ul>
		</section>
	);
};

export default VehicleList;
