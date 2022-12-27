import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import RegisterUser from './Components/User/RegisterUser';
import UserList from './Components/User/UserList';
// import UserLogin from './Components/User/UserLogin';
import VehicleList from './Components/Vehicles/VehicleList';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={<VehicleList />}
          />
          <Route
            path='/users'
            element={<UserList />}
          />
          <Route
            path='/registeruser'
            element={<RegisterUser />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;