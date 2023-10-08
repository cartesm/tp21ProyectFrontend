import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Home";

import AddLocation from "./components/AddLocation";
import Login from "./components/Login";
import Register from "./components/Register";

import Protector from "./Protector.routes";

import AuthContext from "./context/Auth.context";
import LocationContext from "./context/Locations.context";
import NormalContext from "./context/normalContext";

function App() {
  return (
    <AuthContext>
      <NormalContext>
        <LocationContext>
          <Router>
            <Routes>
              <Route path="/" element={<Main />}>
                <Route path="/test" element={<div>esahdjksadgkjgafg</div>} />
                <Route element={<Protector />}>
                  <Route element={<Register />} path="/register" />
                  <Route element={<Login />} path="/login" />
                </Route>
                <Route element={<AddLocation />} path="/add-location" />
              </Route>
            </Routes>
          </Router>
        </LocationContext>
      </NormalContext>
    </AuthContext>
  );
}

export default App;
