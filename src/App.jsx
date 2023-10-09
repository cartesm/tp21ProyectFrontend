import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Home";

import AddLocation from "./components/AddLocation";
import Point from "./components/DataPoint";
import Login from "./components/Login";
import Register from "./components/Register";

import Types from './components/Types';

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
                <Route element={<Register />} path="/register" />
                <Route element={<Login />} path="/login" />
                <Route element={<AddLocation />} path="/add-location" />
                <Route element={<Point />} path="/point/:id" >
                  <Route element={<Types/>} path="/point/:id/type/:typ"/>
                </Route>
              </Route>
            </Routes>
          </Router>
        </LocationContext>
      </NormalContext>
    </AuthContext>
  );
}

export default App;
